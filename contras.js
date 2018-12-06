		function entrar() 
		{ 
				usuario = document.getElementById("PerfilUsuario").value;
				contra = document.getElementById("PerfilContra").value;

			if (usuario == "admin" && contra == "admin" ) 
			{
			window.location.assign('PantallaCuentas.html');
			}

			usuario ="";
			contra = "";
   		}


function nuevo() 
{
	window.location.assign('PantallaCreacion.html');
}

function agregarRegresar() 
{
	window.location.assign('PantallaCuentas.html');
}

function Informacion() 
{
	window.location.assign('PatallaInformacion.html');
}

function editar() 
{
	window.location.assign('PantallaCreacion.html');
}
