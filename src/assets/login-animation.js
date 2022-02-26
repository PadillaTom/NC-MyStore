var email = document.querySelector('#email'), password = document.querySelector('#password'), password2 = document.querySelector('#password2'), mySVG = document.querySelector('.svgContainer'), armL = document.querySelector('.armL'), armR = document.querySelector('.armR'), eyeL = document.querySelector('.eyeL'), eyeR = document.querySelector('.eyeR'), nose = document.querySelector('.nose'), mouth = document.querySelector('.mouth'), mouthBG = document.querySelector('.mouthBG'), mouthSmallBG = document.querySelector('.mouthSmallBG'), mouthMediumBG = document.querySelector('.mouthMediumBG'), mouthLargeBG = document.querySelector('.mouthLargeBG'), mouthMaskPath = document.querySelector('#mouthMaskPath'), mouthOutline = document.querySelector('.mouthOutline'), tooth = document.querySelector('.tooth'), tongue = document.querySelector('.tongue'), chin = document.querySelector('.chin'), face = document.querySelector('.face'), eyebrow = document.querySelector('.eyebrow'), outerEarL = document.querySelector('.earL .outerEar'), outerEarR = document.querySelector('.earR .outerEar'), earHairL = document.querySelector('.earL .earHair'), earHairR = document.querySelector('.earR .earHair'), hair = document.querySelector('.hair');
var caretPos, curEmailIndex, screenCenter, svgCoords, eyeMaxHorizD = 20, eyeMaxVertD = 10, noseMaxHorizD = 23, noseMaxVertD = 10, dFromC, eyeDistH, eyeLDistV, eyeRDistV, eyeDistR, mouthStatus = "small";



function onEmailInput(e) {
	var value = e.target.value;
	curEmailIndex = value.length;

	// very crude email validation for now to trigger effects
	if (curEmailIndex > 0) {
		if (mouthStatus == "small") {
			mouthStatus = "medium";
			TweenMax.to([mouthBG, mouthOutline, mouthMaskPath], 1, { morphSVG: mouthMediumBG, shapeIndex: 8, ease: Expo.easeOut });
			TweenMax.to(tooth, 1, { x: 0, y: 0, ease: Expo.easeOut });
			TweenMax.to(tongue, 1, { x: 0, y: 1, ease: Expo.easeOut });
			TweenMax.to([eyeL, eyeR], 1, { scaleX: .85, scaleY: .85, ease: Expo.easeOut });
		}
		if (value.includes("@")) {
			mouthStatus = "large";
			TweenMax.to([mouthBG, mouthOutline, mouthMaskPath], 1, { morphSVG: mouthLargeBG, ease: Expo.easeOut });
			TweenMax.to(tooth, 1, { x: 3, y: -2, ease: Expo.easeOut });
			TweenMax.to(tongue, 1, { y: 2, ease: Expo.easeOut });
			TweenMax.to([eyeL, eyeR], 1, { scaleX: .65, scaleY: .65, ease: Expo.easeOut, transformOrigin: "center center" });
		} else {
			mouthStatus = "medium";
			TweenMax.to([mouthBG, mouthOutline, mouthMaskPath], 1, { morphSVG: mouthMediumBG, ease: Expo.easeOut });
			TweenMax.to(tooth, 1, { x: 0, y: 0, ease: Expo.easeOut });
			TweenMax.to(tongue, 1, { x: 0, y: 1, ease: Expo.easeOut });
			TweenMax.to([eyeL, eyeR], 1, { scaleX: .85, scaleY: .85, ease: Expo.easeOut });
		}
	} else {
		mouthStatus = "small";
		TweenMax.to([mouthBG, mouthOutline, mouthMaskPath], 1, { morphSVG: mouthSmallBG, shapeIndex: 9, ease: Expo.easeOut });
		TweenMax.to(tooth, 1, { x: 0, y: 0, ease: Expo.easeOut });
		TweenMax.to(tongue, 1, { y: 0, ease: Expo.easeOut });
		TweenMax.to([eyeL, eyeR], 1, { scaleX: 1, scaleY: 1, ease: Expo.easeOut });
	}
}

function onEmailFocus(e) {
	e.target.parentElement.classList.add("focusWithText");
}

function onEmailBlur(e) {
	if (e.target.value == "") {
		e.target.parentElement.classList.remove("focusWithText");
	}
}
function onPasswordFocus(e) {
}

function onPasswordBlur(e) {
}

function initialize() {

	email = document.querySelector('#email'), password = document.querySelector('#password'), password2 = document.querySelector('#password2'), mySVG = document.querySelector('.svgContainer'), armL = document.querySelector('.armL'), armR = document.querySelector('.armR'), eyeL = document.querySelector('.eyeL'), eyeR = document.querySelector('.eyeR'), nose = document.querySelector('.nose'), mouth = document.querySelector('.mouth'), mouthBG = document.querySelector('.mouthBG'), mouthSmallBG = document.querySelector('.mouthSmallBG'), mouthMediumBG = document.querySelector('.mouthMediumBG'), mouthLargeBG = document.querySelector('.mouthLargeBG'), mouthMaskPath = document.querySelector('#mouthMaskPath'), mouthOutline = document.querySelector('.mouthOutline'), tooth = document.querySelector('.tooth'), tongue = document.querySelector('.tongue'), chin = document.querySelector('.chin'), face = document.querySelector('.face'), eyebrow = document.querySelector('.eyebrow'), outerEarL = document.querySelector('.earL .outerEar'), outerEarR = document.querySelector('.earR .outerEar'), earHairL = document.querySelector('.earL .earHair'), earHairR = document.querySelector('.earR .earHair'), hair = document.querySelector('.hair');
	caretPos, curEmailIndex, screenCenter, svgCoords, eyeMaxHorizD = 20, eyeMaxVertD = 10, noseMaxHorizD = 23, noseMaxVertD = 10, dFromC, eyeDistH, eyeLDistV, eyeRDistV, eyeDistR, mouthStatus = "small";

	email.addEventListener('focus', onEmailFocus);
	email.addEventListener('blur', onEmailBlur);
	email.addEventListener('input', onEmailInput);
	password.addEventListener('focus', onPasswordFocus);
	password.addEventListener('blur', onPasswordBlur);
	if (password2 != undefined) {
		password2.addEventListener('focus', onPasswordFocus);
		password2.addEventListener('blur', onPasswordBlur);
	}
	
}

window.initialize = initialize;