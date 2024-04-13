const accordionItems = document.querySelectorAll('.accordion li');

accordionItems.forEach(item => {
    item.addEventListener('click', () => {
        const content = item.querySelector('.content');
        const isOpen = content.style.maxHeight;

        accordionItems.forEach(item => {
            const itemContent = item.querySelector('.content');
            itemContent.style.maxHeight = null;
        });

        if (!isOpen) {
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    });
});
