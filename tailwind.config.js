<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tailwind CSS</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&family=Marcellus&display=swap');
    </style>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        bg: '#0c0c0c',
                        primary: '#0d0d0d',
                        secondary: '#ffffff',
                        text1: '#ffffff',
                        text2: '#ffffff',
                        text3: 'rgb(204, 0, 0)',
                        overlay: 'rgba(12, 12, 12, 0.63)',
                    },
                    fontFamily: {
                        raleway: ['Raleway', 'sans-serif'],
                        marcellus: ['Marcellus', 'serif'],
                    },
                },
            },
        };
    </script>
</head>
<body class="h-full bg-bg text-text1 font-raleway antialiased pt-16 border-l-[10px] border-r-[10px] border-primary overflow-x-hidden overflow-y-visible">
    <ul class="list-none">
        <li>List Item 1</li>
        <li>List Item 2</li>
    </ul>

    <h1 class="font-marcellus text-2xl">Heading 1</h1>
    <p class="break-words hyphens-auto">
        This is a paragraph with word break and hyphens applied.
    </p>

    <a href="#" class="text-text1 hover:text-text2">Link</a>
    <div class="overflow-hidden">Hidden Overflow</div>

    <div class="cursor-pointer bg-text3 text-center p-4">
        Custom Cursor Element
    </div>

    <div class="cursor-pointer bg-overlay p-4">
        Overlay Background
    </div>

    <p class="text-primary">Primary Color Text</p>
    <p class="text-secondary">Secondary Color Text</p>
</body>
</html>
