import { Filter } from "./Filter/Filter";
import FormContacts from "./FormContacts/FormContacts";
import { ListContacts } from "./ListContacts/ListContacts";
import { ContactsBox, ContactsTitle, ContactTitleBox, PhonebookBox } from "./Phonebook.styled";

import { selectContacts, isLoadingNow, fetchContacts } from '../../../redux';
import { useSelector, useDispatch} from 'react-redux';
import PacmanLoader from "react-spinners/PacmanLoader";
import React, { useEffect } from 'react';

export const Phonebook = () => {
	const contacts = useSelector(selectContacts);
  const isLoading = useSelector(isLoadingNow);
  const dispatch = useDispatch();

  // загружаем контент при первой загрузке
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  

	return(
		<PhonebookBox>
			<FormContacts/>

		<ContactsBox> 
		<ContactTitleBox>
			<ContactsTitle>Contacts</ContactsTitle>
			{isLoading && (<PacmanLoader color="#4CC6F5" size={16} />)}
		</ContactTitleBox>
		<Filter/>
			<ListContacts contacts={contacts}/>
		</ContactsBox>
		</PhonebookBox>
	)
}
