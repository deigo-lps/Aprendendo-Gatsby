export default function verify(evento){
  evento.preventDefault();
  const name=document.getElementById("input_name");
  const phone=document.getElementById("input_number");
  const email=document.getElementById("input_email");
  const zip=document.getElementById("input_zip");

  const regPhone=/^[(][0-9]{2}[)] [0-9]{5}[-]([0-9]{4}|[0-9]{3}_)$/;
  const regEmail=/^([a-z0-9.-_]+)([@])([a-z]+)([.])([a-z]+)$/;
  const regZip=/^[0-9]{2}[.][0-9]{3}[-][0-9]{3}$/;
  
  if(regPhone.test(phone.value)&&regEmail.test(email.value)&&regZip.test(zip.value))
    alert("Obrigado por se cadastrar "+name.value);
  else
    alert("Preencha os campos corretamente.")

}