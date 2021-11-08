exports.seed = async function (knex) {
  //truncate all existing tables

  await knex.raw('truncate table "product" CASCADE');
  await knex.raw('truncate table "user" CASCADE');
  await knex.raw('truncate table "userType" CASCADE');
  await knex.raw('truncate table "category" CASCADE');
  await knex.raw('truncate table "brand" CASCADE');

  // Seeds
  await knex('userType').insert([
    { id: 1, name: 'Seller' },
    { id: 2, name: 'Manager' },
  ]);

  await knex('user').insert([
    {
      id: 1,
      fullName: 'Carlos Raez',
      email: 'craez@test.com',
      password: '123',
      userTypeId: 2,
    },
    {
      id: 2,
      fullName: 'Eduardo Escarcena',
      email: 'eescarcena@test.com',
      password: '123',
      userTypeId: 1,
    },
    {
      id: 3,
      fullName: 'Carlos Escarcena',
      email: 'cescarcena@test.com',
      password: '123',
      userTypeId: 1,
    },
    {
      id: 4,
      fullName: 'Eduardo Raez',
      email: 'eraez@test.com',
      password: '123',
      userTypeId: 1,
    },
  ]);

  await knex('category').insert([
    { id: 1, name: 'laptop' },
    { id: 2, name: 'mobile' },
  ]);

  await knex('brand').insert([
    { id: 1, name: 'Samsung' },
    { id: 2, name: 'Apple' },
    { id: 3, name: 'Xiaomi' },
    { id: 4, name: 'Motorola' },
    { id: 5, name: 'Lenovo' },
    { id: 6, name: 'Asus' },
  ]);

  await knex('product').insert([
    {
      id: 1,
      name: 'ThinkPad X1 Carbon 9na gen',
      image:
        'https://www.lenovo.com/medias/lenovo-laptop-thinkpad-x1-carbon-gen-9-14-subseries-hero.png?context=bWFzdGVyfHJvb3R8NjM3NDR8aW1hZ2UvcG5nfGg1Yy9oNDMvMTE2Mjg3NTE2MTgwNzgucG5nfDA1N2Y2ZjU4M2YwOGQ0OTFmMGI4Y2RlN2ZmYTQ4ZWJhZDljNTVlOTNkNTNjNmI2ZDM1ODNjODVmMGY5NGUyMTU',
      sku: '22TP2X1X1C9',
      quantity: 15,
      price: 2067.61,
      categoryId: '1',
      brandId: '5',
      userId: '2',
    },
    {
      id: 2,
      name: 'MacBook Pro - Space Gray - 14-inch',
      image:
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spacegray-select-202110?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1632788573000',
      sku: 'MJ123LL/A&step',
      quantity: 10,
      price: 1899.0,
      categoryId: '1',
      brandId: '2',
      userId: '3',
    },
    {
      id: 3,
      name: 'iPhone 13 Pro',
      image:
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-graphite-select?wid=470&hei=556&fmt=png-alpha&.v=1631652956000',
      sku: 'iPhonePro',
      quantity: 10,
      price: 899.0,
      categoryId: '2',
      brandId: '2',
      userId: '4',
    },
    {
      id: 4,
      name: 'iPhone 12 Pro',
      image:
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-graphite-select?wid=470&hei=556&fmt=png-alpha&.v=1631652956000',
      sku: 'iPhonePro12',
      quantity: 10,
      price: 699.0,
      categoryId: '2',
      brandId: '2',
      userId: '4',
    },
  ]);
};
