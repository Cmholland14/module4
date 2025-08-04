<script>
        function addCard(title, description) {
            // clone the template
            const template =
                document.getElementById("card-template")
                    .content.cloneNode(true);
            // populate the template
            template.querySelector('.card-title').innerText = title;
            template.querySelector('.card-text').innerText = description;
            // include the populated template into the page
            document.querySelector('#card-list')
                .appendChild(template);
        }
        addCard('My Card Title', 'lorem ipsum ble bla');
        addCard('Second Card', 'another card');
    </script>
