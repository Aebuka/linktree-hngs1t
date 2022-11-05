export const inputInfo = [
  {
    key: 1,
    label: "First name",
    inputId: "first_name",
    type: "text",
    placeholder: "Enter your first name",
  },
  {
    key: 2,
    label: "Last name",
    inputId: "last_name",
    type: "text",
    placeholder: "Enter your last name",
  },
  {
    key: 3,
    label: "Email",
    inputId: "email",
    type: "email",
    placeholder: "yourname@email.com",
  },
//   {
//     key: 4,
//     label: "Message",
//     inputId: "message",
//     placeholder: "Send me a message and I'll reply you as soon as possible...",
//   },
];

export default function Input({inputId, label, type, placeholder }) {
  return (
    <div className="fname-lname-child">
      <p><label htmlFor={inputId}>{label}</label></p>
      <p><input className="input" id={inputId} type={type} placeholder={placeholder} /></p>
    </div>
  );
}
