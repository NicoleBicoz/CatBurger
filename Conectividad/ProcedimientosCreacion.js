const { autoCommit } = require('oracledb');
const oracledb = require('oracledb');

let conexionOracle = {
    user          : "system",
    password      : "Angels123",
    connectString : "localhost:1521/xe",
    externalAuth  : false
}
let mensajeRetorno = "";

class funcionesProcedimientos extends React.Component{

    creaEditaLibros(idEditorial, nombreEditorial) {
        return new Promise(async function(){
            let conection = await oracledb.getConnection(conexionOracle);
            var parametros = {
                idEditorial: idEditorial,
                nombreEditorial: nombreEditorial,
                codStatus: {val: 100, type: oracledb.NUMBER, dir: oracledb.BIND_OUT},
                stringStatus: {type: oracledb.DB_TYPE_VARCHAR, dir: oracledb.BIND_OUT}
            }
            
            let resultado = await conn.execute("BEGIN PRC_CREA_ACTUALIZA_EDITORIAL(:idEditorial,:nombreEditorial,:codStatus,:stringStatus); END;",
            parametros,
            {autoCommit: true});
    
            if (resultado.outBinds.codStatus = 200){
                mensajeRetorno = resultado.outBinds.stringStatus;
            }else{
                mensajeRetorno = resultado.outBinds.stringStatus;
            }
    
            return mensajeRetorno;
        });
        
    }
    

    render() {
        
        function creaEditaEditorial(idEditorial, nombreEditorial){
            return new Promise(async function(){
                let conection = await oracledb.getConnection(conexionOracle);
                var parametros = {
                    idEditorial: idEditorial,
                    nombreEditorial: nombreEditorial,
                    codStatus: {val: 100, type: oracledb.NUMBER, dir: oracledb.BIND_OUT},
                    stringStatus: {type: oracledb.DB_TYPE_VARCHAR, dir: oracledb.BIND_OUT}
                }
                
                let resultado = await conn.execute("BEGIN PRC_CREA_ACTUALIZA_EDITORIAL(:idEditorial,:nombreEditorial,:codStatus,:stringStatus); END;",
                parametros,
                {autoCommit: true});
        
                if (resultado.outBinds.codStatus = 200){
                    mensajeRetorno = resultado.outBinds.stringStatus;
                }else{
                    mensajeRetorno = resultado.outBinds.stringStatus;
                }
        
                return mensajeRetorno;
            });
        }
        
        function creaEditaLibros(idEditorial, nombreEditorial){
            return new Promise(async function(){
                let conection = await oracledb.getConnection(conexionOracle);
                var parametros = {
                    idEditorial: idEditorial,
                    nombreEditorial: nombreEditorial,
                    codStatus: {val: 100, type: oracledb.NUMBER, dir: oracledb.BIND_OUT},
                    stringStatus: {type: oracledb.DB_TYPE_VARCHAR, dir: oracledb.BIND_OUT}
                }
                
                let resultado = await conn.execute("BEGIN PRC_CREA_ACTUALIZA_EDITORIAL(:idEditorial,:nombreEditorial,:codStatus,:stringStatus); END;",
                parametros,
                {autoCommit: true});
        
                if (resultado.outBinds.codStatus = 200){
                    mensajeRetorno = resultado.outBinds.stringStatus;
                }else{
                    mensajeRetorno = resultado.outBinds.stringStatus;
                }
        
                return mensajeRetorno;
            });
        }
    
    }
}


export default funcionesProcedimientos;