select * from COLECCION
select * from SERIE
SELECT * FROM SUBSERIE
select * from GRUPO
select * from SubGrupo
select * from CONJUNTO
select * from SUBCONJUNTO
select * from categoria


select  * from UNIDADSIMPLE

select 

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
           ,[lengua]
           ,[condiciones_acceso]
           ,[existencia_localizacion_copias]
           ,[unidades_descripcion_asociada]
           ,[documentos_asociados]
           ,[notas]
           ,[notas_control_interno]
           ,[fechaDRegistro]
           ,[fechaDUltimaAct]
		   ,[Descriptores]
from UNIDADSIMPLE

select 
	[I#1# C�digo de referencia] As id_categoria,
	[I#2# N�mero topogr�fico] as numero_topografico,
[I#3#1# N�mero de casetes] as NT_numerocasetes,
[I#3#2# N�mero de clip en la cinta] as NT_numerocinta,
[I#4# Duraci�n] as duracion,
[II#1# Soporte] as soporte,
[Casete] as ie_casete,
[Caja protectora] as ie_cajaprotectora,
[III# 1# Alcance y contenido] as alcance_contenido,
[III#2# Descriptores] ,
[Topon�micos] as dept_toponimicos,
[Onom�sticos] as dept_onomasticos,
[Cronol�gicos] as dept_cronologicos,
[Otros actores] as dept_otros,
[Tipo de registro] as dept_tipoDRegistro,
[IV#2# Condiciones de acceso ] as condiciones_acceso,
[V#1# Existencia y localizaci�n de copias] as existencia_localizacion_copias,
[V#2# Unidades de descripci�n asociadas] as unidades_descripcion_asociada,
[V#3# Documentos asociados] as documentos_asociados,
[VI# 1# Notas] as notas,
[VI#2# Notas de control interno] as notras_control_interno,
[VII#1# Datos del archivero],
[VII#2# Fecha de registro],
[VII#3# Fecha de actualizaci�n# ],
[F25],
[F26]
from 
[dbo].[SegundoEnv�o$]
WHERE [I#1# C�digo de referencia] Is Not null









select 
	[I#1# C�digo de referencia] As id_categoria,
	[I#2# N�mero topogr�fico] as numero_topografico,
[I#3#1# N�mero de casetes] as NT_numerocasetes,
[I#3#2# N�mero de clip en la cinta] as NT_numerocinta,
[I#4# Duraci�n] as duracion,
[II#1# Soporte] as soporte,
[Casete] as ie_casete,
[Caja protectora] as ie_cajaprotectora,
[III# 1# Alcance y contenido] as alcance_contenido,
[III#2# Descriptores] as descriptores ,
[Topon�micos] as dept_toponimicos,
[Onom�sticos] as dept_onomasticos,
[Cronol�gicos] as dept_cronologicos,
[Otros actores] as dept_otros,
[Tipo de registro] as dept_tipoDRegistro,
[IV#2# Condiciones de acceso ] as condiciones_acceso,
[V#1# Existencia y localizaci�n de copias] as existencia_localizacion_copias,
[V#2# Unidades de descripci�n asociadas] as unidades_descripcion_asociada,
[V#3# Documentos asociados] as documentos_asociados,
[VI# 1# Notas] as notas,
[VI#2# Notas de control interno] as notras_control_interno

from 
[dbo].[SegundoEnv�o$]
WHERE [I#1# C�digo de referencia] Is Not null