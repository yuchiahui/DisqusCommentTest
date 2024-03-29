$(document).ready(function () {
	var bodyElement = $('BODY')[0],
		fieldsetElement = document.createElement('FIELDSET'),
		legendElement = document.createElement('LEGEND'),
		formElement = document.createElement('FORM'),
		tableElement = document.createElement('TABLE'),
		tbodyElement = document.createElement('TBODY');
	$(bodyElement).append($(fieldsetElement).append($(legendElement).text('表單')));
	$(fieldsetElement).append($(formElement).attr({
		'action': 'jQuery.aspx',
		'enctype': 'multipart/form-data',
		'method': 'POST'
	}).append(tableElement).append(tbodyElement));

	var thElementFullname = document.createElement('TH');
	$(thElementFullname).text('姓名');
	var tdElementFullname = document.createElement('TD');
	$(tdElementFullname).append($(document.createElement('INPUT')).attr({
		'name': 'fullname',
		'type': 'text'
	}));
	var trElementFullname = document.createElement('TR');
	$(trElementFullname).append(thElementFullname);
	$(trElementFullname).append(tdElementFullname);
	$(tbodyElement).append(trElementFullname);

//				var trElementGender = $('<TR>');
//				var thElementGender = $('<TH>').text('性別');
//				var tdElementGender = $('<TD>');
//				
	/**
	 * 性別
	 */
	var thElementGender = document.createElement('TH');
	$(thElementGender).text('性別');
	var tdElementGender = document.createElement('TD');
	$(tbodyElement).append(
		$(document.createElement('TR')).append(
		thElementGender,
		$(tdElementGender).append(
		// 男
		$(document.createElement('LABEL')).append(
		$(document.createElement('INPUT')).attr({
		'name': 'gender',
		'type': 'radio',
		'value': 'male'
	}),
		$(document.createElement('SPAN')).text('男')
		),
		// 女
		$(document.createElement('LABEL')).append(
		$(document.createElement('INPUT')).attr({
		'name': 'gender',
		'type': 'radio',
		'value': 'female'
	}),
		$(document.createElement('SPAN')).text('女')
		)
		)
		)
		);

	var thElementRole = document.createElement('TH');
	$(thElementRole).text('身份');
	var tdElementRole = document.createElement('TD'), labelElementRoleP = document.createElement('LABEL');
	$(tdElementRole).append(labelElementRoleP);
	$(labelElementRoleP).append($(document.createElement('INPUT')).attr({
		'name': 'role',
		'type': 'checkbox',
		'value': 'p'
	}));
	$(labelElementRoleP).append($(document.createElement('SPAN')).text('P端'));
	var labelElementRoleB = document.createElement('LABEL');
	$(tdElementRole).append(labelElementRoleB);
	$(labelElementRoleB).append($(document.createElement('INPUT')).attr({
		'name': 'role',
		'type': 'checkbox',
		'value': 'b'
	}));
	$(labelElementRoleB).append($(document.createElement('SPAN')).text('B端'));
	var labelElementRoleC = document.createElement('LABEL');
	$(tdElementRole).append(labelElementRoleC);
	$(labelElementRoleC).append($(document.createElement('INPUT')).attr({
		'name': 'role',
		'type': 'checkbox',
		'value': 'c'
	}));
	$(labelElementRoleC).append($(document.createElement('SPAN')).text('C端'));
	var trElementRole = document.createElement('TR');
	(trElementRole).append(thElementRole);
	$(trElementRole).append(tdElementRole);
	$(tbodyElement).append(trElementRole);

	var thElementLocation = document.createElement('TH');
	$(thElementLocation).text('地區');
	var optgroupElementTainan = document.createElement('OPTGROUP');
	$(optgroupElementTainan).attr({'label': '臺南'});
	$(optgroupElementTainan).append($(document.createElement('OPTION')).attr({'value': '701'}).text('東區'));
	var optgroupElementKaohsiung = document.createElement('OPTGROUP');
	$(optgroupElementKaohsiung).attr({'label': '高雄'});
	$(optgroupElementKaohsiung).append($(document.createElement('OPTION')).attr({'value': '804'}).text('鼓山區'));
	var selectElementLocation = document.createElement('SELECT');
	$(selectElementLocation).append(optgroupElementTainan);
	$(selectElementLocation).append(optgroupElementKaohsiung);
	var tdElementLocation = document.createElement('TD');
	$(tdElementLocation).append(selectElementLocation);
	var trElementLocation = document.createElement('TR');
	$(trElementLocation).append(thElementLocation);
	$(trElementLocation).append(tdElementLocation);
	$(tbodyElement).append(trElementLocation);

	var trElementFile = document.createElement('TR');
	$(trElementFile).append($(document.createElement('TD')).attr({
		'colspan': '2'}).append($(document.createElement('INPUT')).attr({
		'accept': 'image/*',
		'name': 'image',
		'type': 'file'
	})));
	$(tbodyElement).append(trElementFile);

	var inputElementReset = document.createElement('INPUT');
	$(inputElementReset).attr({'type': 'reset', 'value': '取消'});
	$(formElement).append(inputElementReset);

	var inputElementSubmit = document.createElement('INPUT');
	$(inputElementSubmit).attr({'type': 'submit', 'value': '確定'});
	$(formElement).append(inputElementSubmit);
});