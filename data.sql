insert into users (user_id, first_name, last_name, email, password, is_admin) values (1, 'Kassi', 'Settle', 'ksettle0@taobao.com', '6USnx4lY', true);
insert into users (user_id, first_name, last_name, email, password, is_admin) values (2, 'Susie', 'Alexandersen', 'salexandersen1@arstechnica.com', 'QaHShaUQx', false);
insert into users (user_id, first_name, last_name, email, password, is_admin) values (3, 'Huey', 'Wintour', 'hwintour2@state.tx.us', 'mgE9jzz', true);
insert into users (user_id, first_name, last_name, email, password, is_admin) values (4, 'Ashton', 'Dunderdale', 'adunderdale3@economist.com', '7vzy1lJSyK18', false);
insert into users (user_id, first_name, last_name, email, password, is_admin) values (5, 'Constancy', 'Simko', 'csimko4@businessinsider.com', '1xNFIgmL', false);
insert into users (user_id, first_name, last_name, email, password, is_admin) values (6, 'Robert', 'Markwell', 'rmarkwell5@domainmarket.com', '9Yz8NCtr', true);
insert into users (user_id, first_name, last_name, email, password, is_admin) values (7, 'Gregoire', 'Rutigliano', 'grutigliano6@bloglovin.com', 'NWUGVayaa', true);
insert into users (user_id, first_name, last_name, email, password, is_admin) values (8, 'Roby', 'Boydon', 'rboydon7@rediff.com', 'EZgIs3UIr6aF', true);
insert into users (user_id, first_name, last_name, email, password, is_admin) values (9, 'Martynne', 'Tourry', 'mtourry8@netlog.com', 'yfoyENy', false);
insert into users (user_id, first_name, last_name, email, password, is_admin) values (10, 'Ave', 'Dwelling', 'adwelling9@51.la', '5gbYFhO', false);

insert into product_category (category_id, category) values (1, 'escritorios');
insert into product_category (category_id, category) values (2, 'accesorios');
insert into product_category (category_id, category) values (3, 'mousepads');
insert into product_category (category_id, category) values (4, 'desktop pads');

insert into colors (color_id, color) values (1, 'negro');
insert into colors (color_id, color) values (2, 'blanco');
insert into colors (color_id, color) values (3, 'marrón');
insert into colors (color_id, color) values (4, 'gris oscuro');
insert into colors (color_id, color) values (5, 'azul marino');

insert into products (product_id, name, description, img_url, category_id, color_id, price) values (1, 'vulputate luctus cum', 'Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.', 'http://dummyimage.com/225x100.png/ff4444/ffffff', 2, 1, 701);
insert into products (product_id, name, description, img_url, category_id, color_id, price) values (2, 'aenean auctor gravida', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 'http://dummyimage.com/230x100.png/dddddd/000000', 2, 3, 910);
insert into products (product_id, name, description, img_url, category_id, color_id, price) values (3, 'amet lobortis sapien', 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.', 'http://dummyimage.com/167x100.png/cc0000/ffffff', 1, 1, 586);
insert into products (product_id, name, description, img_url, category_id, color_id, price) values (4, 'nulla elit', 'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', 'http://dummyimage.com/158x100.png/cc0000/ffffff', 4, 2, 785);
insert into products (product_id, name, description, img_url, category_id, color_id, price) values (5, 'vel nulla', 'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.', 'http://dummyimage.com/143x100.png/5fa2dd/ffffff', 4, 1, 448);
insert into products (product_id, name, description, img_url, category_id, color_id, price) values (6, 'aenean fermentum donec', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.', 'http://dummyimage.com/217x100.png/5fa2dd/ffffff', 4, 3, 771);
insert into products (product_id, name, description, img_url, category_id, color_id, price) values (7, 'amet cursus id', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.', 'http://dummyimage.com/247x100.png/cc0000/ffffff', 4, 3, 836);
insert into products (product_id, name, description, img_url, category_id, color_id, price) values (8, 'dui luctus', 'Duis aliquam convallis nunc.', 'http://dummyimage.com/155x100.png/cc0000/ffffff', 3, 3, 986);
insert into products (product_id, name, description, img_url, category_id, color_id, price) values (9, 'morbi non quam', 'Fusce consequat. Nulla nisl. Nunc nisl.', 'http://dummyimage.com/120x100.png/ff4444/ffffff', 4, 3, 887);
insert into products (product_id, name, description, img_url, category_id, color_id, price) values (10, 'lacus at turpis', 'Nam dui.', 'http://dummyimage.com/157x100.png/dddddd/000000', 2, 4, 46);


insert into product_cart (product_cart_id, user_id, product_id) values (1, 4, 5);
insert into product_cart (product_cart_id, user_id, product_id) values (2, 1, 5);
insert into product_cart (product_cart_id, user_id, product_id) values (3, 5, 10);
insert into product_cart (product_cart_id, user_id, product_id) values (4, 4, 3);
insert into product_cart (product_cart_id, user_id, product_id) values (5, 3, 10);
insert into product_cart (product_cart_id, user_id, product_id) values (6, 2, 9);
insert into product_cart (product_cart_id, user_id, product_id) values (7, 2, 8);

