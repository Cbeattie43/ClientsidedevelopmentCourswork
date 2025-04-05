function openPopover(element, title, text) {
    const popover = document.getElementById('cardPopover');
    const popoverTitle = document.getElementById('popoverTitle');
    const popoverText = document.getElementById('popoverText');
  
    popoverTitle.textContent = title;
    popoverText.textContent = text;
  
    const rect = element.getBoundingClientRect();
    popover.style.top = `${rect.bottom + window.scrollY + 10}px`;
    popover.style.left = `${rect.left + window.scrollX}px`;
    popover.style.display = 'block';
  }
  
  function closePopover() {
    const popover = document.getElementById('cardPopover');
    popover.style.display = 'none';
  }