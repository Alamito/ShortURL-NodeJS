const uuidv4 = require('uuid/v4');

module.exports = app => {
  const customerWalletsDB = app.data.customerWallets;
  const controller = {};

  const {
    customerWallets: customerWalletsMock,
  } = customerWalletsDB;

  controller.listCustomerWallets = (req, res) => res.status(200).json(customerWalletsDB);

  controller.saveCustomerWallets = (req, res) => {
    customerWalletsMock.data.push({
      id: uuidv4(),
      parentId: uuidv4(),
      used: req.body.used,
      url: req.body.url,
    });

    res.status(201).json(customerWalletsMock);
  };

  controller.removeCustomerWallets = (req, res) => {
    const {
      customerId,
    } = req.params;

    const foundCustomerIndex = customerWalletsMock.data.findIndex(customer => customer.id === customerId);

    if (foundCustomerIndex === -1) {
      res.status(404).json({
        message: 'Cliente não encontrado na base.',
        success: false,
        customerWallets: customerWalletsMock,
      });
    } else {
      customerWalletsMock.data.splice(foundCustomerIndex, 1);
      res.status(200).json({
        message: 'Cliente encontrado e deletado com sucesso!',
        success: true,
        customerWallets: customerWalletsMock,
      });
    }
  };

  controller.updateCustomerWallets = (req, res) => {
    const { 
      customerId,
    } = req.params;

    const foundCustomerIndex = customerWalletsMock.data.findIndex(customer => customer.id === customerId);

    if (foundCustomerIndex === -1) {
      res.status(404).json({
        message: 'Cliente não encontrado na base.',
        success: false,
        customerWallets: customerWalletsMock,
      });
    } else {
      const newCustomer = {
        id: customerId ,
        parentId: req.body.parentId,
        used: req.body.used,
        url: req.body.url,
        createdAt: new Date()
      };
      
      customerWalletsMock.data.splice(foundCustomerIndex, 1, newCustomer);
      
      res.status(200).json({
        message: 'Cliente encontrado e atualizado com sucesso!',
        success: true,
        customerWallets: customerWalletsMock,
      });
    }
  }

  return controller;
}