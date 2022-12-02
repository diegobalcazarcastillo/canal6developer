
	DECLARE @id_categoria varchar(255)
	DECLARE @numero_topografico varchar(255)
	DECLARE @NT_numerocasetes varchar(255)
	DECLARE @NT_numerocinta varchar(255)
	DECLARE @duracion varchar(255)
	DECLARE @soporte varchar(255)
	DECLARE @ie_casete varchar(255)
	DECLARE @ie_cajaprotectora varchar(255)
	DECLARE @alcance_contenido  varchar(255)
	DECLARE @descriptores  varchar(255)
	DECLARE @dept_toponimicos  varchar(255)
	DECLARE @dept_onomasticos  varchar(255)
	DECLARE @dept_cronologicos  varchar(255)
	DECLARE @dept_otros  varchar(255)
	DECLARE @dept_tipoDRegistro  varchar(255)
	DECLARE @condiciones_acceso  varchar(255)
	DECLARE @existencia_localizacion_copias  varchar(255)
	DECLARE @unidades_descripcion_asociada  varchar(255)
	DECLARE @documentos_asociados  varchar(255)
	DECLARE @notas  varchar(255)
	DECLARE @notras_control_interno  varchar(255)

	DECLARE @Contador Integer = 1

Declare Cr cursor for
select 
	id As id_categoria,
	numero_topografico as numero_topografico,
	nt_numerocasetes as NT_numerocasetes,
	NT_numerocinta as NT_numerocinta,
	REPLACE(CONVERT(varchar(20),duracion,120),'1899-12-30','') as duracion,
	soporte as soporte,
	ie_casete as ie_casete,
	'FALTA_AGREGAR'as ie_cajaprotectora,
	alcance_contenido as alcance_contenido,
	'-- NO DISPONIBE --' as descriptores ,
	dept_toponimicos AS dept_toponimicos,
	'FALTA_AGREGAR'as dept_onomasticos,
	dept_cronologicos as dept_cronologicos,
	dept_otros as dept_otros,
	dept_tipoDRegistro as dept_tipoDRegistro,
	condiciones_acceso as condiciones_acceso,
	'FALTA_AGREGAR' as existencia_localizacion_copias,
	unidades_descripcion_asociada as unidades_descripcion_asociada,
	documentos_asociados as documentos_asociados,
	'' as notas,
	'' as notras_control_interno
from 
[dbo].[intentotercero$]
WHERE numero_topografico Is Not null AND id = 'MX-C6J-3-5-6-9-12'
Open Cr
Begin
	Fetch Cr Into 
	@id_categoria
	,@numero_topografico
	,@NT_numerocasetes
	,@NT_numerocinta
	,@duracion
	,@soporte
	,@ie_casete
	,@ie_cajaprotectora
	,@alcance_contenido 
	,@descriptores 
	,@dept_toponimicos 
	,@dept_onomasticos 
	,@dept_cronologicos 
	,@dept_otros 
	,@dept_tipoDRegistro 
	,@condiciones_acceso 
	,@existencia_localizacion_copias 
	,@unidades_descripcion_asociada 
	,@documentos_asociados 
	,@notas 
	,@notras_control_interno 
	While @@FETCH_STATUS = 0
	Begin
		
		
			INSERT INTO UNIDADSIMPLE (
			[id]
           ,[id_categoria]
           ,[numero_topografico]
           ,[NT_numerocasetes]
           ,[NT_numerocinta]
           ,[duracion]
           ,[soporte]
           ,[ie_casete]
           ,[ie_cajaprotectora]
           ,[alcance_contenido]
           ,[dept_toponimicos]
           ,[dept_onomasticos]
           ,[dept_cronologicos]
           ,[dept_otros]
           ,[dept_tipoDRegistro]
           ,[condiciones_acceso]
           ,[existencia_localizacion_copias]
           ,[unidades_descripcion_asociada]
           ,[documentos_asociados]
           ,[notas]
           ,[notas_control_interno]
		   ,[Descriptores]) VALUES 
		   (
		     @Contador
		    ,@id_categoria
			,@numero_topografico
			,@NT_numerocasetes
			,@NT_numerocinta
			,@duracion
			,@soporte
			,@ie_casete
			,@ie_cajaprotectora
			,@alcance_contenido 
			,@dept_toponimicos 
			,@dept_onomasticos 
			,@dept_cronologicos 
			,@dept_otros 
			,@dept_tipoDRegistro 
			,@condiciones_acceso 
			,@existencia_localizacion_copias 
			,@unidades_descripcion_asociada 
			,@documentos_asociados 
			,@notas 
			,@notras_control_interno 
			,@descriptores 
			   )
		
		Set @Contador = @Contador + 1
		Fetch Cr Into 
		@id_categoria
		,@numero_topografico
		,@NT_numerocasetes
		,@NT_numerocinta
		,@duracion
		,@soporte
		,@ie_casete
		,@ie_cajaprotectora
		,@alcance_contenido 
		,@descriptores 
		,@dept_toponimicos 
		,@dept_onomasticos 
		,@dept_cronologicos 
		,@dept_otros 
		,@dept_tipoDRegistro 
		,@condiciones_acceso 
		,@existencia_localizacion_copias 
		,@unidades_descripcion_asociada 
		,@documentos_asociados 
		,@notas 
		,@notras_control_interno 
	End
End
Close Cr
Deallocate CR