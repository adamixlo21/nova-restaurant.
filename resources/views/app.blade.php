<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class(['dark' => ($appearance ?? 'system') == 'dark'])>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        {{-- Inline script to detect system dark mode preference and apply it immediately --}}
        <script>
            (function() {
                const appearance = '{{ $appearance ?? "system" }}';

                if (appearance === 'system') {
                    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

                    if (prefersDark) {
                        document.documentElement.classList.add('dark');
                    }
                }
            })();
        </script>

        {{-- Inline style to set the HTML background color based on our theme in app.css --}}
        <style>
            html {
                background-color: oklch(1 0 0);
            }

            html.dark {
                background-color: oklch(0.145 0 0);
            }
        </style>

        <link rel="icon" href="/favicon.ico" sizes="any">
        <link rel="icon" href="/favicon.svg" type="image/svg+xml">
        <link rel="apple-touch-icon" href="/apple-touch-icon.png">

        @fonts

        @viteReactRefresh
        @vite(['resources/css/app.css', 'resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
        <x-inertia::head>
            <title>{{ config('app.name', 'Laravel') }}</title>
        </x-inertia::head>

    </head>
    <body class="font-sans antialiased">
        <x-inertia::app />


        <div
            class="zc-widget-config"
            data-utm_source="website"
            data-restaurant="368521">
        </div>

        <script>
            ;(function (d, s, id) {
                const el = d.getElementsByTagName(s)[0]

                if (d.getElementById(id) || el.parentNode == null) {
                    return
                }

                var js = d.createElement(s)
                js.id = id
                js.src = 'https://sdk.zenchef.com/v1/sdk.min.js'

                el.parentNode.insertBefore(js, el)
            })(document, 'script', 'zenchef-sdk')
        </script>

    </body>
</html>
