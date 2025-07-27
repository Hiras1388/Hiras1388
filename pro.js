const showWarningInChromiumWithNoSupport = () => {
	if (!navigator.userAgentData || !navigator.userAgentData.brands) return;

	const chromium = navigator.userAgentData.brands.filter(b => b.brand == 'Chromium');
	if (!chromium) return;

	if (chromium[0].version >= 107) return;
	
	console.log(chromium[0]);
	
	document.querySelector('.warning').style.display = 'block';
}

showWarningInChromiumWithNoSupport();
