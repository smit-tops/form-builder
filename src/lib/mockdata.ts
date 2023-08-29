export const mockFormFields = [
  {
    id: '58c9a9e4-7e1a-4043-b513-1357bfc8e45e',
    type: 'heading',
    label:
      '<p style="text-align:center;"><span style="font-family:\'Times New Roman\', Times, serif;font-size:23px;"><strong>Student Admission Form</strong></span></p>',
    value: 'Heading',
    subLabel: '',
    fieldName: 'Heading',
  },
  {
    id: 'c26b2535-3b83-48d9-8f24-11a586dd0c77',
    type: 'lineBreak',
    label: 'Line Break',
    value: 'Line Break',
    fieldName: 'Line Break',
  },
  {
    id: 'bce48dff-715c-4430-896f-c7a6af21d0c0',
    type: 'paragraph',
    label: 'Paragraph',
    value:
      '<p style="text-align:justify;"><strong>Lorem Ipsum</strong> is simply dummy <i><strong>text</strong></i> of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five <a href="http://google.com"><strong>centuries</strong></a>, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>',
    fieldName: 'Paragraph',
  },
  {
    id: 'be65dc53-34a9-49c1-9ee8-bafc0e83a945',
    type: 'shortText',
    label: '<p>Full Name</p>',
    value: 'Short Text',
    fieldName: 'Short Text',
    required: true,
  },
  {
    id: 'a8ea02cf-1215-45e0-9c5e-3152dab1195e',
    type: 'singleChoice',
    label: '<p>Gender</p>',
    value: 'Single Choice',
    fieldName: 'Single Choice',
    options: [
      {
        label: 'Male',
        value: 'option_2',
        selected: false,
      },
      {
        label: 'Female',
        value: 'option_3',
        selected: false,
      },
      {
        value: 'e79a717c-cc5e-4c89-a502-77018aeabdc9',
        label: 'Other',
        selected: false,
      },
    ],
    required: true,
  },
  {
    id: '2b71a494-4015-403f-ac22-bfb3acb4bae9',
    type: 'longText',
    label: '<p>Address</p>',
    value: 'Long Text',
    fieldName: 'Long Text',
    required: true,
  },
  {
    id: '2a8f8eb4-9cae-46f4-9159-957bcaf29d01',
    type: 'multipleChoice',
    label: '<p>Hobby</p>',
    value: 'Multiple Choice',
    fieldName: 'Multiple Choice',
    options: [
      {
        label: 'Cricket',
        value: 'option_2',
        selected: false,
      },
      {
        label: 'Chess',
        value: 'option_3',
        selected: false,
      },
      {
        value: '45f36182-8d4b-4e91-ad89-216c2857f5ba',
        label: 'Reading',
        selected: false,
      },
      {
        value: '17f2ce4c-3cf2-4d94-b38d-f68882454f71',
        label: 'Travelling',
        selected: false,
      },
    ],
    displayType: true,
    required: true,
  },
  {
    id: 'e8f8a391-0085-45aa-af31-c2c72648659a',
    type: 'dropdown',
    label: '<p>Select Country</p>',
    value: 'Dropdown',
    fieldName: 'Dropdown',
    options: [
      {
        label: 'India',
        value: 'option_2',
        selected: false,
      },
      {
        label: 'USA',
        value: 'option_3',
        selected: false,
      },
      {
        value: 'c53890e1-fae6-41fa-be16-fc5f7400cc0f',
        label: 'Canada',
        selected: false,
      },
    ],
    required: true,
  },
]

export const toolbarItems = [
  {
    key: 'label',
    value: 'Label',
    icon: 'fa-header',
  },

  {
    key: 'multilineInput',
    value: 'Multiline Input',
    icon: 'fa-text-height',
  },

  {
    key: 'input',
    value: 'Text Input',
    icon: 'fa-font',
  },
  {
    key: 'ckeditor',
    value: 'Editor',
    icon: 'fa-paragraph',
  },
  {
    key: 'dropdown',
    value: 'Dropdown',
    icon: 'fa fa-user',
  },
  {
    key: 'tags',
    value: 'Tags',
    icon: 'fa-tags',
  },
  {
    key: 'lineBreak',
    value: 'Line Break',
    icon: 'fa-arrows-h',
  },
  {
    key: 'radio',
    value: 'Radio Button',
    icon: 'fa-dot-circle',
  },
  {
    key: 'checkbox',
    value: 'Check Box',
    icon: 'fa-check-square',
  },
  {
    key: 'date',
    value: 'Date',
    icon: 'fa-calendar',
  },
  {
    key: 'image',
    value: 'Image',
    icon: 'fa-image',
  },
  {
    key: 'file',
    value: 'File',
    icon: 'fa-file',
  },
  {
    key: 'section',
    value: 'Section',
    icon: 'fa fa-user',
  },
  {
    key: 'twoColumn',
    value: 'Two Column Grid',
    icon: 'fa-columns',
  },
]

export default {}
