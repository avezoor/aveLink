function enlargeProfileImage() {
    const profileImg = document.querySelector('.profile img');
    if (profileImg.style.transform === 'scale(1.5)') {
        profileImg.style.transform = 'scale(1)';
    } else {
        profileImg.style.transform = 'scale(1.5)';
    }
}
