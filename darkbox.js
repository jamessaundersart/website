let darkBoxVisible = false;

		window.addEventListener('load', (event) => {
			let images = document.querySelectorAll("img");
			if(images !== null && images !== undefined && images.length > 0) {
				images.forEach(function(img) {
					img.addEventListener('click', (evt) => {
						showDarkbox(img.src);
					});
				});
			}
		});

		function showDarkbox(url, fullurl) {
			if(!darkBoxVisible) {
				let widthFivePercent = window.innerWidth * 0.05;
				let boxWidth = window.innerWidth - (widthFivePercent * 2);
				let heightFivePercent = window.innerHeight * 0.05;
				let boxHeight = window.innerHeight - (heightFivePercent * 2);
				let boxTwentyPercent = boxHeight * 0.2;
				let imgHeight = boxHeight - (boxHeight * 0.2);
				let imgWidth = boxWidth - (boxWidth * 0.2);

				let x = (window.innerWidth - boxWidth) / 2;
				let y = window.scrollY + 50;

				// Create the darkBox
				var div = document.createElement("div");
				div.id = "darkbox";
				div.innerHTML = '<img class="darkboximg" style="height:95%;" src="'+url+'" />';
				document.body.appendChild(div);
				let box = document.getElementById("darkbox");
				box.style.width = boxWidth.toString()+"px";
				box.style.height = boxHeight.toString()+"px";
				box.style.left = x.toString()+"px";
				box.style.top = y.toString()+"px";

				let img = document.querySelector(".darkboximg");
				img.style.height = imgHeight.toString()+'px';
				if(img.offsetWidth > imgWidth) {
					img.style.width = imgWidth.toString()+'px';
					img.style.height = '';
				}

				box.addEventListener('click', (event) => {
					// Remove it
					let element = document.getElementById("darkbox");
					element.parentNode.removeChild(element);

					darkBoxVisible = false;
				})

				darkBoxVisible = true;

			} else {
				// Remove it
				let element = document.getElementById("darkbox");
				element.parentNode.removeChild(element);

				darkBoxVisible = false;
			}
		}