const addOpenDetailsEvent = () => {
  const openDetails = function() {
    const messageId = this.dataset.id;
    window.open(`/message/${messageId}`, '_self');
  }
  
  const openDetailsBtns = document.querySelectorAll('button.open-detail-btn');
  openDetailsBtns.forEach(btn => {
    btn.addEventListener('click', openDetails);
  })
}

addOpenDetailsEvent();