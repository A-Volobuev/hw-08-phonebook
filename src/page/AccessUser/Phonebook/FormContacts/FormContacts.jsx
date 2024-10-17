import React  from 'react';
import {FormBox, FormButton, FormTitle} from '../FormContacts/FormContacts.styled';
import { nanoid } from 'nanoid';
import { Formik} from 'formik';
import * as Yup from 'yup';
import { selectContacts, addContacts } from '../../../../redux';
import { useDispatch, useSelector } from 'react-redux';
import { ContactFormComponents } from '../../../../components/ContactFormComponent/ContactFormComponent';

let schema = Yup.object().shape({
  name: Yup.string().min(4).max(32).required(),
});
const initialValues = {
  name: '',
  number: '',
};

export default function FormContacts() {
	const contacts = useSelector(selectContacts);
	const dispatch = useDispatch();

	return (
		<Formik 
		initialValues={initialValues}
		validationSchema={schema}
		onSubmit={(values, actions) => {
			//! values в формике это данные
			console.log(values);
			const contact = {
				id: nanoid(),
				name: values.name,
				number: values.number,
			};
			if(contacts.some(
				contact =>
					contact.number === values.number
			)) {
				alert("Контакт с таким номером уже добавлен")
			} else {
				// Используем функцию с редюсера для добавления контакта в изначальный массив
				dispatch(addContacts(contact));
			}
			actions.resetForm();
			actions.setSubmitting(false); 
		}}
		>
			{({ values, setFieldValue }) => (
			<FormBox>
			<FormTitle>PhoneBook</FormTitle>
				<ContactFormComponents values={values} setFieldValue={setFieldValue}/>

				<FormButton type="submit">Add contact</FormButton>
			</FormBox>
			)}
			</Formik>
		
	);
}

