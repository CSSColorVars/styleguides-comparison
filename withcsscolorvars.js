const inp = document.querySelectorAll('input.variation');
const stateTheme = document.getElementById('stateTheme');
for (let i = 0; i < inp.length; i++) {
	inp[i].addEventListener("click", function() {
		if (this.value > 3) {
			document.body.style.background = '#2a313b';
			document.querySelector('footer').classList.add('dark');
		} else {
			document.body.style.background = '#f9f9f9';
			document.querySelector('footer').classList.remove('dark');
		}
	});
}

function bluepurple() {
	const bluepurple = document.getElementById("bluepurple");
	if (bluepurple.checked == true){
		stateTheme.innerHTML = null;
	}
}
function sunset() {
	const sunset = document.getElementById("sunset");
	if (sunset.checked == true){
		stateTheme.innerHTML = `
			:root {
				--primary-color: #ff9557;
				--primary-HS: 22, 100%;
				--primary-HSL: 22, 100%, 67%;
				--secondary-color: #ffcc67;
				--secondary-HS: 40, 100%;
				--secondary-HSL: 40, 100%, 70%;
				--accent-color: #4e5166;
				--accent-HS: 233, 13%;
				--accent-HSL: 233, 13%, 35%;
				--accent2-color: #588b8b;
				--accent2-HS: 180, 22%;
				--accent2-HSL: 180, 22%, 45%;
				--accent3-color: #fe5f55;
				--accent3-HS: 4, 99%;
				--accent3-HSL: 4, 99%, 66%;
			}
		`;
	}
}

function godiva() {
	const godiva = document.getElementById("godiva");
	if (godiva.checked == true){
		stateTheme.innerHTML = `
			:root {
				--primary-color: #a05793;
				--primary-HS: 311, 30%;
				--primary-HSL: 311, 30%, 48%;
				--secondary-color: #a3d858;
				--secondary-HS: 85, 62%;
				--secondary-HSL: 85, 62%, 60%;
				--accent-color: #245e71;
				--accent-HS: 195, 52%;
				--accent-HSL: 195, 52%, 29%;
				--accent2-color: #2aa5a1;
				--accent2-HS: 178, 59%;
				--accent2-HSL: 178, 59%, 41%;
				--accent3-color: #92374d;
				--accent3-HS: 345, 45%;
				--accent3-HSL: 345, 45%, 39%;
			}
		`;
	}
}
// 
function dark() {
	const dark = document.getElementById("dark");
	if (dark.checked == true){
		stateTheme.innerHTML = `
			:root {
				--canvasColor: #2a313b;
				--backgroundColor: #2a313b;
				--foregroundColor: #e3f2fd;
			}
			:root {
				--primary-color: #367bc3;
				--primary-HS: 211, 57%;
				--primary-HSL: 211, 57%, 49%;
				--secondary-color: #38bfa7;
				--secondary-HS: 169, 55%;
				--secondary-HSL: 169, 55%, 48%;
				--accent-color: #586994;
				--accent-HS: 223, 25%;
				--accent-HSL: 223, 25%, 46%;
				--accent2-color: #8fe1a2;
				--accent2-HS: 134, 58%;
				--accent2-HSL: 134, 58%, 72%;
				--accent3-color: #fe938c;
				--accent3-HS: 4, 98%;
				--accent3-HSL: 4, 98%, 77%;
			}
		`;
	}
}

function pinkaru() {
	const pinkaru = document.getElementById("pinkaru");
	if (pinkaru.checked == true){
		stateTheme.innerHTML = `
			:root {
				--canvasColor: #2a313b;
				--backgroundColor: #2a313b;
				--foregroundColor: #e3f2fd;
			}
			:root {
				--primary-color: #f95794;
				--primary-HS: 337, 93%;
				--primary-HSL: 337, 93%, 66%;
				--secondary-color: #323da5;
				--secondary-HS: 234, 53%;
				--secondary-HSL: 234, 53%, 42%;
				--accent-color: #FFC729;
				--accent-HS: 44, 100%;
				--accent-HSL: 44, 100%, 58%;
				--accent2-color: #53dd6c;
				--accent2-HS: 131, 67%;
				--accent2-HSL: 131, 67%, 60%;
				--accent3-color: #f52f57;
				--accent3-HS: 348, 91%;
				--accent3-HSL: 348, 91%, 57%;
			}
		`;
	}
}