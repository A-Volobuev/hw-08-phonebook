import React from 'react';
import { List, ListItem, ButtonBox, ListText, DeleteIcon, ListContactsBox} from './ListContacts.styled';

import {useDispatch, useSelector } from 'react-redux';

import { removeContacts, selectFilter } from '../../../../redux';
import {EditModalBtn} from './EditModal/EditModal'


export const ListContacts = ({contacts}) => {
	const dispatch = useDispatch();
	// Получаем текущее значение с фильтра
  const filter = useSelector(selectFilter);
	// Фильтруем все контакты по имени
	const visibleContacts = contacts.filter(({ name }) =>
	name.toLowerCase().includes(filter)
	);

	return(
		<ListContactsBox>
			<List>
          {visibleContacts.map(({id, name, number}) => (
						<ListItem key={id}>
							<ListText>{name}: <span>{number}</span></ListText>

						<ButtonBox>
							
						<EditModalBtn id={id}/>

						<button onClick={() => dispatch(removeContacts(id))}>
							<DeleteIcon/>
						</button>
						</ButtonBox>

						</ListItem>
					))}
					{visibleContacts.length === 0 && <span> Not Find, try another name</span>}
      </List>
		</ListContactsBox>
	)
}
