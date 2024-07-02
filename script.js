var currentFilter = 'all';
function setFilter(filter) {
  let newBtnId = "." + filter + 'FilterBtn';
  let btnId = "." + currentFilter + 'FilterBtn';
  //console.log(newBtnId,btnId);
  if (filter !== currentFilter) {
    document.querySelector(btnId).classList.remove('currentBtn');
    document.querySelector(newBtnId).classList.add('currentBtn');
    currentFilter = filter;
    var wallpaperList = document.querySelectorAll('.wallpaper-list');
    for (var i = 0; i < wallpaperList.length; i++) {
      var wallpaper = wallpaperList[i];
      var wallpaperFilter = wallpaper.classList;
      if (wallpaperFilter.contains(filter) || currentFilter === 'all') {
        wallpaper.style.display = 'block';
      } else {
        wallpaper.style.display = 'none';
      }
    }
  }
}
function checkFilter(search) {
  let wallpaperList = document.querySelectorAll('.wallpaper-item');
  for (i = 0; i < wallpaperList.length; i++) {
    let item = wallpaperList[i];
    let lowerSearch = search.toLowerCase();
    let classes = item.classList;
    let className = classes[1];
    if (className.includes(lowerSearch)) {
      item.style.display = 'block';
    }
    else {
      item.style.display = 'none';
    }
  }
}