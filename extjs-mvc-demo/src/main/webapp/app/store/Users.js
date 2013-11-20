Ext.define('AM.store.Users', {
    extend: 'Ext.data.Store',
    model: 'AM.model.User',
    autoLoad: true,

    proxy: {
    type: 'ajax',
    api: {
        read: 'app/data/users.json',
        update: 'app/data/updateUsers.json'
    },
    reader: {
        type: 'json',
        root: 'users',
        successProperty: 'success'
    }
}
});