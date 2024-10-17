import {InputBox, InputField, InputLabel} from './ContactFormComponent.styled';

const formatPhoneNumber = (value) => {
	// только цифры
  const phoneNumber = value.replace(/[^\d]/g, '');
  // Форматируем как XXX-XX-XX
  const formattedNumber = phoneNumber
    .replace(/(\d{3})(\d{2})(\d{2})/, '$1-$2-$3')
    .slice(0, 9); 

  return formattedNumber;
};

export const ContactFormComponents = ({values, setFieldValue}) => {
	return(
		<>
			<InputBox>
					<InputLabel>Name</InputLabel>
					<InputField
					id="name"
					name="name"
					type="text"
					title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          placeholder="Enter name"
					/>
				</InputBox>

				<InputBox>
					<InputLabel>Number</InputLabel>
					<InputField
					id="number"
					name="number"
					type="tel"
					country="US"
          
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          maxLength="9"
          placeholder="111-11-11"
					value={values.number}
              // форматирует номер с черточками
              onChange={(e) => {
                const formattedNumber = formatPhoneNumber(e.target.value);
                setFieldValue('number', formattedNumber);
              }}
					/>
				</InputBox>
		</>
	)
}