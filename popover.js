function openPopover(element, title, text) {
    const popover = document.getElementById('cardPopover');
    const popoverTitle = document.getElementById('popoverTitle');
    const popoverText = document.getElementById('popoverText');
  
    popoverTitle.textContent = title;
    popoverText.textContent = text;
  
    const rect = element.getBoundingClientRect();
    
  }
  
  function closePopover() {
    const popover = document.getElementById('cardPopover');
    popover.style.display = 'none';
  }