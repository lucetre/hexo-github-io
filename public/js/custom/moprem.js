function share_main() {
	const video = document.getElementById("moprem_video");
	const start = document.getElementById("moprem_start");
    video.style.display = 'none';

	var displayMediaOptions = {
		video: {
			cursor: "always",
		},
		audio: false,
	};

	start.onclick = function (e) {
		stopSharing();
		startSharing();
	};

	async function startSharing() {
		let capture = null;
		try {
			capture = await navigator.mediaDevices.getDisplayMedia(
				displayMediaOptions
			);

			capture
				.getVideoTracks()[0]
				.addEventListener("ended", () => stopSharing());

			video.srcObject = capture;
            video.style.display = 'flex';
		} catch (error) {
			console.log(error);
		}
	}

	function stopSharing() {
		if (video.srcObject == null) return;
		let tracks = video.srcObject.getTracks();
		tracks.forEach((track) => track.stop());
		video.srcObject = null;
        video.style.display = 'none';
	}
}

share_main();
