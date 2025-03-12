<script>
        function toggleTheme() {
            document.body.classList.toggle('dark-mode');
            if (document.body.classList.contains('dark-mode')) {
                document.body.style.backgroundColor = '#222';
                document.body.style.color = '#fff';
            } else {
                document.body.style.backgroundColor = '#f4f4f4';
                document.body.style.color = '#333';
            }
        }
    </script>
