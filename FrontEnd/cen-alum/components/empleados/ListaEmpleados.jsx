import React, { useContext, useState, useEffect } from 'react';
import { EmpleadoContext } from './EmpleadoContext'
import { Table, Button, circle, Tooltip } from 'antd';
import { MinusCircleOutlined, EditOutlined } from '@ant-design/icons';

const listaEmpleados = () => {
     const { empleados, eliminarEmpleado, seleccionarEmpleado, hayseleccion } = useContext(EmpleadoContext);


     const columns = [
          { title: 'Identificacion', dataIndex: 'id', width: '20%', },
          { title: 'Nombre', dataIndex: 'name', width: '20%', },
          { title: 'Email', dataIndex: 'email', width: '20%', },
          { title: 'Direccion', dataIndex: 'address', width: '15%', },
          { title: 'Telefono', dataIndex: 'phoneNumb', width: '15%', },
          {
               title: '', dataIndex: '', key: "button1",
               render: (text, record) => empleados.length >= 1 ? (
                    <Tooltip placement="top" title={"Editar"}>
                         <EditOutlined
                              style={{ margin: '0 2% 2% 0' }}
                              onClick={() => { seleccionarEmpleado(record), hayseleccion(true) }}
                         />
                    </Tooltip>
               ) : null,
               width: '5%',

          },
          {
               title: '', dataIndex: '',
               render: (text, record) => empleados.length >= 1 ? (
                    <Tooltip placement="top" title={"Eliminar"}>
                         <MinusCircleOutlined
                              style={{ color: 'red', margin: '0 2% 2% 0' }}
                              onClick={() => eliminarEmpleado(record.id)}
                         />
                    </Tooltip>
               ) : null,
               width: '5%',

          }
     ];


     const data = [];
     if (empleados !== undefined) {
          empleados.forEach(mano => {
               data.push({ key: mano.id, id: mano.id, name: mano.name, email: mano.email, address: mano.address, phoneNumb: mano.phoneNumb })
          })
     }




     return (
          <div>
               <Table columns={columns}
                    dataSource={data}
                    showHeader={false}
                    scroll={{
                         y: 340
                    }}
                    size='small'
                    pagination={false}
               />
          </div>
     );
};

export default listaEmpleados;