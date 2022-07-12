function isTouching(a,b){
    const aRect = a.getBoundingClienRect();
    const bRect = b.getBoundingClienRect();

    return !(
        aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
    )
}