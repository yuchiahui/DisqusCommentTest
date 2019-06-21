$(document).ready(function () {
	var fieldsetElement = document.createElement('FIELDSET'), legendElement = document.createElement('LEGEND'),
		formElement = document.createElement('FORM'), tableElement = document.createElement('TABLE'),
		tbodyElement = document.createElement('TBODY');

	document.body.appendChild(fieldsetElement);
	legendElement.innerHTML = '表單';
	fieldsetElement.appendChild(legendElement);
	fieldsetElement.appendChild(formElement);
	formElement.appendChild(tableElement);
	tableElement.appendChild(tbodyElement);

	formElement.setAttribute('method', 'POST');
	formElement.setAttribute('action', '');
	formElement.setAttribute('enctype', 'multipart/form-data');

	var trElementFullname = document.createElement('TR'), thElementFullname = document.createElement('TH'),
		tdElementFullname = document.createElement('TD'), inputElementFullname = document.createElement('INPUT');

	tbodyElement.appendChild(trElementFullname);
	trElementFullname.appendChild(thElementFullname);
	trElementFullname.appendChild(tdElementFullname);
	thElementFullname.innerHTML = '姓名';
	inputElementFullname.setAttribute('name', 'fullname');
	inputElementFullname.setAttribute('type', 'text');
	tdElementFullname.appendChild(inputElementFullname);

	var trElementGender = document.createElement('TR'), thElementGender = document.createElement('TH'),
		tdElementGender = document.createElement('TD'), labelElementMale = document.createElement('LABEL'),
		labelElementFemale = document.createElement('LABEL'), inputElementMale = document.createElement('INPUT'),
		inputElementFemale = document.createElement('INPUT'), spanElementMale = document.createElement('SPAN'),
		spanElementFemale = document.createElement('SPAN');

	tbodyElement.appendChild(trElementGender);
	trElementGender.appendChild(thElementGender);
	trElementGender.appendChild(tdElementGender);
	thElementGender.innerHTML = '性別';

	inputElementMale.setAttribute('name', 'gender');
	inputElementMale.setAttribute('type', 'radio');
	inputElementMale.setAttribute('value', 'male');
	labelElementMale.appendChild(inputElementMale);

	tdElementGender.appendChild(labelElementMale);
	labelElementMale.appendChild(spanElementMale);
	spanElementMale.innerHTML = '男';

	inputElementFemale.setAttribute('name', 'gender');
	inputElementFemale.setAttribute('type', 'radio');
	inputElementFemale.setAttribute('value', 'female');
	labelElementFemale.appendChild(inputElementFemale);

	tdElementGender.appendChild(labelElementFemale);
	labelElementFemale.appendChild(spanElementFemale);
	spanElementFemale.innerHTML = '女';

	var trElementRole = document.createElement('TR'), thElementRole = document.createElement('TH'),
		tdElementRole = document.createElement('TD'), labelElementRoleP = document.createElement('LABEL'),
		labelElementRoleB = document.createElement('LABEL'), labelElementRoleC = document.createElement('LABEL'),
		inputElementRoleP = document.createElement('INPUT'), inputElementRoleB = document.createElement('INPUT'),
		inputElementRoleC = document.createElement('INPUT'), spanElementRoleP = document.createElement('SPAN'),
		spanElementRoleB = document.createElement('SPAN'), spanElementRoleC = document.createElement('SPAN');

	tbodyElement.appendChild(trElementRole);
	trElementRole.appendChild(thElementRole);
	trElementRole.appendChild(tdElementRole);
	thElementRole.innerHTML = '身份';

	inputElementRoleP.setAttribute('name', 'role');
	inputElementRoleP.setAttribute('type', 'checkbox');
	inputElementRoleP.setAttribute('value', 'p');
	labelElementRoleP.appendChild(inputElementRoleP);

	tdElementRole.appendChild(labelElementRoleP);
	labelElementRoleP.appendChild(spanElementRoleP);
	spanElementRoleP.innerHTML = 'P端';

	inputElementRoleB.setAttribute('name', 'role');
	inputElementRoleB.setAttribute('type', 'checkbox');
	inputElementRoleB.setAttribute('value', 'b');
	labelElementRoleB.appendChild(inputElementRoleB);

	tdElementRole.appendChild(labelElementRoleB);
	labelElementRoleB.appendChild(spanElementRoleB);
	spanElementRoleB.innerHTML = 'B端';

	inputElementRoleC.setAttribute('name', 'role');
	inputElementRoleC.setAttribute('type', 'checkbox');
	inputElementRoleC.setAttribute('value', 'c');
	labelElementRoleC.appendChild(inputElementRoleC);

	tdElementRole.appendChild(labelElementRoleC);
	labelElementRoleC.appendChild(spanElementRoleC);
	spanElementRoleC.innerHTML = 'C端';

	var trElementLocation = document.createElement('TR'), thElementLocation = document.createElement('TH'),
		tdElementLocation = document.createElement('TD'), selectElementLocation = document.createElement('SELECT'),
		optgroupElementTainan = document.createElement('OPTGROUP')　, optgroupElementKaohsiung = document.createElement('OPTGROUP'),
		optionElementTainan = document.createElement('OPTION')　, optionElementKaohsiung = document.createElement('OPTION');

	tbodyElement.appendChild(trElementLocation);
	trElementLocation.appendChild(thElementLocation);
	trElementLocation.appendChild(tdElementLocation);
	thElementLocation.innerHTML = '地區';

	selectElementLocation.setAttribute('name', 'location');
	tdElementLocation.appendChild(selectElementLocation);

	optgroupElementTainan.setAttribute('label', '臺南市');
	selectElementLocation.appendChild(optgroupElementTainan);

	optionElementTainan.setAttribute('value', '701');
	optionElementTainan.innerHTML = '東區';
	optgroupElementTainan.appendChild(optionElementTainan);

	optgroupElementKaohsiung.setAttribute('label', '高雄市');
	selectElementLocation.appendChild(optgroupElementKaohsiung);

	optionElementKaohsiung.setAttribute('value', '804');
	optionElementKaohsiung.innerHTML = '鼓山區';
	optgroupElementKaohsiung.appendChild(optionElementKaohsiung);

	var trElementImage = document.createElement('TR'), tdElementImage = document.createElement('TD'),
		inputElementImage = document.createElement('INPUT');

	tbodyElement.appendChild(trElementImage);
	tdElementImage.setAttribute('colspan', '2');
	trElementImage.appendChild(tdElementImage);

	tdElementImage.appendChild(inputElementImage);
	inputElementImage.setAttribute('accept', 'image/*');
	inputElementImage.setAttribute('name', 'image');
	inputElementImage.setAttribute('type', 'file');

	var inputElementReset = document.createElement('INPUT'), inputElementSubmit = document.createElement('INPUT');

	formElement.appendChild(inputElementReset);
	inputElementReset.setAttribute('type', 'reset');
	inputElementReset.setAttribute('value', '取消');

	formElement.appendChild(inputElementSubmit);
	inputElementSubmit.setAttribute('type', 'submit');
	inputElementSubmit.setAttribute('value', '確定');
});