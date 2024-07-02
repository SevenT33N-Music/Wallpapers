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
  if (search.length > 0) {
    let results = 0;
    let hr = document.querySelectorAll('hr');
    let h1 = document.querySelectorAll('h1');
    for (i = 0; i < hr.length; i++) {
      let itemHR = hr[i];
      let itemH1 = h1[i];
      itemHR.style.display = "none";
      itemH1.style.display = "none";
    }
    let wallpaperList = document.querySelectorAll('.wallpaper-item');
    for (i = 0; i < wallpaperList.length; i++) {
      let item = wallpaperList[i];
      let lowerSearch = search.toLowerCase();
      let classes = item.classList;
      let className = classes[1];
      if (className.includes(lowerSearch)) {
        item.style.display = 'block';
        results += 1;
      }
      else {
        item.style.display = 'none';
      }
    }
    document.getElementById('searchNumber').innerHTML = `Search Results: ${results}`;
  }
  else {
    document.getElementById('searchNumber').innerHTML = "";
    let hr = document.querySelectorAll('hr');
    let h1 = document.querySelectorAll('h1');
    for (i = 0; i < hr.length; i++) {
      let itemHR = hr[i];
      let itemH1 = h1[i];
      itemHR.style.display = "block";
      itemH1.style.display = "block";
    }
    let wallpaperList = document.querySelectorAll('.wallpaper-item');
    for (i = 0; i < wallpaperList.length; i++) {
      let item = wallpaperList[i];
      item.style.display = 'block';
    }
  }
}