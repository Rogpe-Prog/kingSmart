const CategorySchema = {
    name: 'Category',
    primaryKey: 'id',
    properties: {
        id: 'string',
        name: 'string',
        coor: {type: 'string', default: '#fff'},
        isDefault: {type: 'bool', default: false},
        isCredit: {type: 'bool', default: false},
        isDebit: {type: 'bool', default: false},
        order: {type: 'int', default: 0},
        entries: 'Entry[]',
    },
}

export default CategorySchema