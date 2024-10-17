import * as React from 'react';
import Modal from '@mui/material/Modal';
import { ChangeIcon, ModalBox, FormBox, FormTitle, FormButton, EditTitlBox, CloseIcon } from './EditModal.styled';
import * as Yup from 'yup';
import { Formik} from 'formik';
import { ContactFormComponents } from '../../../../../components/ContactFormComponent/ContactFormComponent';
import { useDispatch } from 'react-redux';
import { editContacts} from '../../../../../redux';



let schema = Yup.object().shape({
  name: Yup.string().min(4).max(32).required(),
});
const initialValues = {
  name: '',
  number: '',
};

export const EditModalBtn = ({id}) => {
	const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

	const dispatch = useDispatch();

	return(
		<>
		<button onClick={handleOpen}>
			<ChangeIcon />
		</button>
		<Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalBox>
				<Formik 
		initialValues={initialValues}
		validationSchema={schema}
		onSubmit={({name, number}, actions) => {
			// console.log(values);
			const updateContact = {name, number};
			dispatch(editContacts({ id, updateContact }));

			actions.resetForm();
			actions.setSubmitting(false); 
			handleClose();
		}}
		>
			{({ values, setFieldValue }) => (
			<FormBox>
			<EditTitlBox>
				<FormTitle>Edit Contact</FormTitle>
				<button>
					<CloseIcon onClick={handleClose}/>
				</button>
			</EditTitlBox>
			
				<ContactFormComponents values={values} setFieldValue={setFieldValue}/>
				<FormButton type="submit">Save</FormButton>
			</FormBox>
			)}
			</Formik>
        </ModalBox>
      </Modal>
		</>
	)
}