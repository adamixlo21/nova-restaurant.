<?php

$sqlitePath = __DIR__.'/database/database.sqlite';

/*
|--------------------------------------------------------------------------
| Railway PostgreSQL public connection
|--------------------------------------------------------------------------
|
| These values come from Railway Public Networking:
|
| Host: sakura.proxy.rlwy.net
| Port: 31472
| Database: railway
| Username: postgres
|
*/

$pgHost = 'sakura.proxy.rlwy.net';
$pgPort = '31472';
$pgDatabase = 'railway';
$pgUsername = 'postgres';
$pgPassword = 'nYIgdvrxJqPqaLgXBUGAVLdYUImbAaWo';

/*
|--------------------------------------------------------------------------
| Connect to SQLite
|--------------------------------------------------------------------------
*/

$sqlite = new PDO(
    "sqlite:{$sqlitePath}",
);

$sqlite->setAttribute(
    PDO::ATTR_ERRMODE,
    PDO::ERRMODE_EXCEPTION,
);

/*
|--------------------------------------------------------------------------
| Connect to Railway PostgreSQL
|--------------------------------------------------------------------------
*/

$postgres = new PDO(
    "pgsql:host={$pgHost};port={$pgPort};dbname={$pgDatabase};sslmode=require",
    $pgUsername,
    $pgPassword,
);

$postgres->setAttribute(
    PDO::ATTR_ERRMODE,
    PDO::ERRMODE_EXCEPTION,
);

/*
|--------------------------------------------------------------------------
| Tables to import
|--------------------------------------------------------------------------
|
| Order matters because of foreign keys:
|
| menus
|   ↓
| categories
|   ↓
| menu_items
|   ↓
| menu_item_prices
|
*/

$tables = [
    'users',
    'menus',
    'categories',
    'menu_items',
    'menu_item_prices',
    'reservations',
    'contacts',
    'actualiteiten',
    'vacancies',
];

echo "\n";
echo "========================================\n";
echo " SQLite → Railway PostgreSQL Import\n";
echo "========================================\n\n";

/*
|--------------------------------------------------------------------------
| Import data
|--------------------------------------------------------------------------
*/

foreach ($tables as $table) {
    echo "Importing {$table}...\n";

    $rows = $sqlite
        ->query("SELECT * FROM \"{$table}\"")
        ->fetchAll(PDO::FETCH_ASSOC);

    if (count($rows) === 0) {
        echo "  No rows found.\n\n";
        continue;
    }

    foreach ($rows as $row) {
        $columns = array_keys($row);

        $columnList = implode(
            ', ',
            array_map(
                fn ($column) => "\"{$column}\"",
                $columns,
            ),
        );

        $placeholders = implode(
            ', ',
            array_map(
                fn ($column) => ":{$column}",
                $columns,
            ),
        );

        $updateColumns = array_filter(
            $columns,
            fn ($column) => $column !== 'id',
        );

        $updates = implode(
            ', ',
            array_map(
                fn ($column) =>
                "\"{$column}\" = EXCLUDED.\"{$column}\"",
                $updateColumns,
            ),
        );

        $sql = "
            INSERT INTO \"{$table}\" ({$columnList})
            VALUES ({$placeholders})
            ON CONFLICT (id)
            DO UPDATE SET {$updates}
        ";

        $statement = $postgres->prepare($sql);

        foreach ($row as $column => $value) {
            if ($value === null) {
                $statement->bindValue(
                    ":{$column}",
                    null,
                    PDO::PARAM_NULL,
                );

                continue;
            }

            $statement->bindValue(
                ":{$column}",
                $value,
            );
        }

        $statement->execute();
    }

    echo '  '.count($rows)." rows imported.\n\n";
}

/*
|--------------------------------------------------------------------------
| Reset PostgreSQL ID sequences
|--------------------------------------------------------------------------
|
| This is important because we copied the original SQLite IDs.
| Without this, PostgreSQL may try to reuse an existing ID later.
|
*/

echo "Resetting PostgreSQL ID sequences...\n\n";

foreach ($tables as $table) {
    try {
        $maxId = $postgres
            ->query("
                SELECT COALESCE(MAX(id), 0)
                FROM \"{$table}\"
            ")
            ->fetchColumn();

        if ((int) $maxId === 0) {
            echo "  {$table}: no IDs to reset.\n";
            continue;
        }

        $sequence = $postgres
            ->query("
                SELECT pg_get_serial_sequence(
                    '{$table}',
                    'id'
                )
            ")
            ->fetchColumn();

        if (!$sequence) {
            echo "  {$table}: no sequence found.\n";
            continue;
        }

        $statement = $postgres->prepare(
            'SELECT setval(:sequence, :max_id, true)',
        );

        $statement->execute([
            'sequence' => $sequence,
            'max_id' => $maxId,
        ]);

        echo "  {$table}: sequence reset to {$maxId}.\n";
    } catch (Throwable $e) {
        echo "  {$table}: sequence reset failed.\n";
        echo "  {$e->getMessage()}\n";
    }
}


echo "\n";
echo "========================================\n";
echo " Import finished!\n";
echo "========================================\n\n";
