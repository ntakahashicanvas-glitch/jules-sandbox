document.addEventListener('DOMContentLoaded', function() {
    const tabMenuItems = document.querySelectorAll('.tab-menu-item');
    const tabPanels = document.querySelectorAll('.tab-panel');

    tabMenuItems.forEach(item => {
        item.addEventListener('click', () => {
            // Get the target tab panel from the data attribute
            const targetTab = item.getAttribute('data-tab');
            const targetPanel = document.getElementById(targetTab);

            // Remove 'active' class from all tab menu items
            tabMenuItems.forEach(menuItem => {
                menuItem.classList.remove('active');
            });

            // Add 'active' class to the clicked menu item
            item.classList.add('active');

            // Hide all tab panels
            tabPanels.forEach(panel => {
                panel.classList.remove('active');
            });

            // Show the target tab panel
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });
});
