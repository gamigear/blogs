const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

// Mock Data
const users = [
  { id: 1, fullName: 'Galen Slixby', company: 'Yotz PVT LTD', role: 'editor', username: 'gslixby0', country: 'El Salvador', contact: '(479) 232-9151', email: 'gslixby0@abc.net.au', currentPlan: 'enterprise', status: 'inactive', avatar: '', avatarColor: 'primary', billing: 'Auto Debit' },
  { id: 2, fullName: 'Halsey Redmore', company: 'Skinder PVT LTD', role: 'author', username: 'hredmore1', country: 'Albania', contact: '(472) 607-9137', email: 'hredmore1@imgur.com', currentPlan: 'team', status: 'pending', avatar: '/images/avatars/3.png', billing: 'Auto Debit' },
  { id: 3, fullName: 'Marjory Sicely', company: 'Oozz PVT LTD', role: 'maintainer', username: 'msicely2', country: 'Russia', contact: '(321) 264-4599', email: 'msicely2@who.int', currentPlan: 'enterprise', status: 'active', avatar: '/images/avatars/1.png', billing: 'Auto Debit' },
  { id: 4, fullName: 'Cyrill Risby', company: 'Oozz PVT LTD', role: 'maintainer', username: 'crisby3', country: 'China', contact: '(923) 690-6806', email: 'crisby3@wordpress.com', currentPlan: 'team', status: 'inactive', avatar: '/images/avatars/3.png', billing: 'Manual Paypal' },
  { id: 5, fullName: 'Maggy Hurran', company: 'Aimbo PVT LTD', role: 'subscriber', username: 'mhurran4', country: 'Pakistan', contact: '(669) 914-1078', email: 'mhurran4@yahoo.co.jp', currentPlan: 'enterprise', status: 'pending', avatar: '/images/avatars/1.png', billing: 'Manual Cash' },
  { id: 6, fullName: 'Silvain Halstead', company: 'Jaxbean PVT LTD', role: 'author', username: 'shalstead5', country: 'China', contact: '(958) 973-3093', email: 'shalstead5@shinystat.com', currentPlan: 'company', status: 'active', avatar: '', avatarColor: 'error', billing: 'Manual Cash' },
  { id: 7, fullName: 'Breena Gallemore', company: 'Jazzy PVT LTD', role: 'subscriber', username: 'bgallemore6', country: 'Canada', contact: '(825) 977-8152', email: 'bgallemore6@boston.com', currentPlan: 'company', status: 'pending', avatar: '', avatarColor: 'warning', billing: 'Auto Debit' },
  { id: 8, fullName: 'Kathryne Liger', company: 'Pixoboo PVT LTD', role: 'author', username: 'kliger7', country: 'France', contact: '(187) 440-0934', email: 'kliger7@vinaora.com', currentPlan: 'enterprise', status: 'pending', avatar: '/images/avatars/4.png', billing: 'Manual Paypal' },
  { id: 9, fullName: 'Franz Scotfurth', company: 'Tekfly PVT LTD', role: 'subscriber', username: 'fscotfurth8', country: 'China', contact: '(978) 146-5443', email: 'fscotfurth8@dailymotion.com', currentPlan: 'team', status: 'pending', avatar: '/images/avatars/2.png', billing: 'Auto Debit' },
  { id: 10, fullName: 'Jillene Bellany', company: 'Gigashots PVT LTD', role: 'maintainer', username: 'jbellany9', country: 'Jamaica', contact: '(589) 284-6732', email: 'jbellany9@kickstarter.com', currentPlan: 'company', status: 'inactive', avatar: '/images/avatars/5.png', billing: 'Manual Cash' },
  { id: 11, fullName: 'Jonah Wharlton', company: 'Eare PVT LTD', role: 'subscriber', username: 'jwharltona', country: 'United States', contact: '(176) 532-6824', email: 'jwharltona@oakley.com', currentPlan: 'team', status: 'inactive', avatar: '/images/avatars/4.png', billing: 'Auto Debit' },
  { id: 12, fullName: 'Seth Hallam', company: 'Yakitri PVT LTD', role: 'subscriber', username: 'shallamb', country: 'Peru', contact: '(234) 464-0600', email: 'shallamb@hugedomains.com', currentPlan: 'team', status: 'pending', avatar: '/images/avatars/5.png', billing: 'Manual Paypal' },
  { id: 13, fullName: 'Yoko Pottie', company: 'Leenti PVT LTD', role: 'subscriber', username: 'ypottiec', country: 'Philippines', contact: '(907) 284-5083', email: 'ypottiec@privacy.gov.au', currentPlan: 'basic', status: 'inactive', avatar: '/images/avatars/7.png', billing: 'Manual Paypal' },
  { id: 14, fullName: 'Maximilianus Krause', company: 'Digitube PVT LTD', role: 'author', username: 'mkraused', country: 'Democratic Republic of the Congo', contact: '(167) 135-7392', email: 'mkraused@stanford.edu', currentPlan: 'team', status: 'active', avatar: '/images/avatars/6.png', billing: 'Auto Debit' },
  { id: 15, fullName: 'Zsazsa McCleverty', company: 'Kaymbo PVT LTD', role: 'maintainer', username: 'zmcclevertye', country: 'France', contact: '(317) 409-6565', email: 'zmcclevertye@soundcloud.com', currentPlan: 'enterprise', status: 'active', avatar: '/images/avatars/2.png', billing: 'Auto Debit' },
  { id: 16, fullName: 'Bentlee Emblin', company: 'Yambee PVT LTD', role: 'author', username: 'bemblinf', country: 'Spain', contact: '(590) 606-1056', email: 'bemblinf@wired.com', currentPlan: 'company', status: 'active', avatar: '/images/avatars/6.png', billing: 'Manual Cash' },
  { id: 17, fullName: 'Brockie Myles', company: 'Wikivu PVT LTD', role: 'maintainer', username: 'bmylesg', country: 'Poland', contact: '(553) 225-9905', email: 'bmylesg@amazon.com', currentPlan: 'basic', status: 'active', avatar: '', avatarColor: 'success', billing: 'Auto Debit' },
  { id: 18, fullName: 'Bertha Biner', company: 'Twinte PVT LTD', role: 'editor', username: 'bbinerh', country: 'Yemen', contact: '(901) 916-9287', email: 'bbinerh@mozilla.com', currentPlan: 'team', status: 'active', avatar: '/images/avatars/7.png', billing: 'Manual Cash' },
  { id: 19, fullName: 'Travus Bruntjen', company: 'Cogidoo PVT LTD', role: 'admin', username: 'tbruntjeni', country: 'France', contact: '(524) 586-6057', email: 'tbruntjeni@sitemeter.com', currentPlan: 'enterprise', status: 'active', avatar: '', avatarColor: 'primary', billing: 'Manual Cash' },
  { id: 20, fullName: 'Wesley Burland', company: 'Bubblemix PVT LTD', role: 'editor', username: 'wburlandj', country: 'Honduras', contact: '(569) 683-1292', email: 'wburlandj@uiuc.edu', currentPlan: 'team', status: 'inactive', avatar: '/images/avatars/6.png', billing: 'Manual paypal' },
]

const products = [
  { id: 1, productName: 'iPhone 14 Pro', category: 'Electronics', stock: true, sku: 19472, price: '$999', qty: 665, status: 'Inactive', image: '/images/apps/ecommerce/product-1.png', productBrand: 'Super Retina XDR display footnote Pro Motion technology' },
  { id: 2, productName: 'Echo Dot (4th Gen)', category: 'Electronics', stock: false, sku: 72836, price: '$25.50', qty: 827, status: 'Published', image: '/images/apps/ecommerce/product-2.png', productBrand: 'Echo Dot Smart speaker with Alexa' },
  { id: 3, productName: 'Dohioue Wall Clock', category: 'Accessories', stock: false, sku: 29540, price: '$16.34', qty: 804, status: 'Published', image: '/images/apps/ecommerce/product-3.png', productBrand: 'Modern 10 Inch Battery Operated Wall Clocks' },
  { id: 4, productName: 'INZCOU Running Shoes', category: 'Shoes', stock: false, sku: 49402, price: '$36.98', qty: 528, status: 'Scheduled', image: '/images/apps/ecommerce/product-4.png', productBrand: 'Lightweight Tennis Shoes Non Slip Gym Workout Shoes' },
  { id: 5, productName: 'Apple Watch Series 7', category: 'Office', stock: false, sku: 46658, price: '$799', qty: 851, status: 'Scheduled', image: '/images/apps/ecommerce/product-5.png', productBrand: 'Starlight Aluminum Case with Starlight Sport Band.' },
  { id: 6, productName: 'Meta Quest 2', category: 'Office', stock: true, sku: 57640, price: '$299', qty: 962, status: 'Scheduled', image: '/images/apps/ecommerce/product-6.png', productBrand: 'Advanced All-In-One Virtual Reality Headset' },
  { id: 7, productName: 'MacBook Pro 16', category: 'Electronics', stock: true, sku: 92885, price: '$2648.95', qty: 965, status: 'Published', image: '/images/apps/ecommerce/product-7.png', productBrand: 'Laptop M2 Pro chip with 12‑core CPU and 19‑core GPU' },
  { id: 8, productName: 'SAMSUNG Galaxy S22 Ultra', category: 'Electronics', stock: true, sku: 75257, price: '$899', qty: 447, status: 'Published', image: '/images/apps/ecommerce/product-8.png', productBrand: 'Android Smartphone, 256GB, 8K Camera' },
  { id: 9, productName: 'Air Jordan', category: 'Shoes', stock: false, sku: 31063, price: '$125', qty: 942, status: 'Inactive', image: '/images/apps/ecommerce/product-9.png', productBrand: 'Air Jordan is a line of basketball shoes produced by Nike' },
  { id: 10, productName: 'VISKABACKA', category: 'Home Decor', stock: false, sku: 91848, price: '$190.45', qty: 133, status: 'Scheduled', image: '/images/apps/ecommerce/product-10.png', productBrand: 'Armchair, Skartofta black/light grey' },
  { id: 11, productName: 'Nintendo Switch', category: 'Games', stock: true, sku: 52575, price: '$296.99', qty: 870, status: 'Inactive', image: '/images/apps/ecommerce/product-11.png', productBrand: 'TV Mode, Tabletop Mode, Handheld Mode' },
  { id: 12, productName: 'PlayStation 5', category: 'Games', stock: true, sku: 59551, price: '$499', qty: 145, status: 'Scheduled', image: '/images/apps/ecommerce/product-12.png', productBrand: 'Marvel at incredible graphics and experience' },
  { id: 13, productName: 'Amazon Fire TV', category: 'Electronics', stock: false, sku: 5829, price: '$263.49', qty: 587, status: 'Scheduled', image: '/images/apps/ecommerce/product-13.png', productBrand: '4K UHD smart TV, stream live TV without cable' },
  { id: 14, productName: 'Smiletag Ceramic Vase', category: 'Home Decor', stock: false, sku: 24456, price: '$34.99', qty: 310, status: 'Scheduled', image: '/images/apps/ecommerce/product-14.png', productBrand: 'Modern Farmhouse Decor Vase Set of 3' },
  { id: 15, productName: 'Apple iPad', category: 'Electronics', stock: true, sku: 35946, price: '$248.39', qty: 468, status: 'Published', image: '/images/apps/ecommerce/product-15.png', productBrand: '10.2-inch Retina Display, 64GB' },
]

const invoices = [
  { id: '4987', issuedDate: '13 Dec 2025', address: '7777 Mendez Plains', company: 'Hall-Robbins PLC', companyEmail: 'don85@johnson.com', country: 'USA', contact: '(616) 865-4180', name: 'Jordan Stevenson', service: 'Software Development', total: 3428, avatar: '', avatarColor: 'primary', invoiceStatus: 'Paid', balance: '$724', dueDate: '23 Dec 2025' },
  { id: '4988', issuedDate: '17 Dec 2025', address: '04033 Wesley Wall Apt. 961', company: 'Mccann LLC and Sons', companyEmail: 'brenda49@taylor.info', country: 'Haiti', contact: '(226) 204-8287', name: 'Stephanie Burns', service: 'UI/UX Design & Development', total: 5219, avatar: '/images/avatars/1.png', invoiceStatus: 'Downloaded', balance: '0', dueDate: '15 Dec 2025' },
  { id: '4989', issuedDate: '19 Dec 2025', address: '5345 Robert Squares', company: 'Leonard-Garcia and Sons', companyEmail: 'smithtiffany@powers.com', country: 'Denmark', contact: '(955) 676-1076', name: 'Tony Herrera', service: 'Unlimited Extended License', total: 3719, avatar: '/images/avatars/2.png', invoiceStatus: 'Paid', balance: '0', dueDate: '03 Dec 2025' },
  { id: '4990', issuedDate: '06 Dec 2025', address: '19022 Clark Parks Suite 149', company: 'Smith, Miller and Henry LLC', companyEmail: 'mejiageorge@lee-perez.com', country: 'Cambodia', contact: '(832) 323-6914', name: 'Kevin Patton', service: 'Software Development', total: 4749, avatar: '/images/avatars/3.png', invoiceStatus: 'Sent', balance: '0', dueDate: '11 Dec 2025' },
  { id: '4991', issuedDate: '08 Dec 2025', address: '8534 Saunders Hill Apt. 583', company: 'Garcia-Cameron and Sons', companyEmail: 'brandon07@pierce.com', country: 'Martinique', contact: '(970) 982-3353', name: 'Mrs. Julie Donovan MD', service: 'UI/UX Design & Development', total: 4056, avatar: '/images/avatars/4.png', invoiceStatus: 'Draft', balance: '$815', dueDate: '30 Dec 2025' },
  { id: '4992', issuedDate: '26 Dec 2025', address: '661 Perez Run Apt. 778', company: 'Burnett-Young PLC', companyEmail: 'guerrerobrandy@beasley-harper.com', country: 'Botswana', contact: '(511) 938-9617', name: 'Amanda Phillips', service: 'UI/UX Design & Development', total: 2771, avatar: '', avatarColor: 'secondary', invoiceStatus: 'Paid', balance: '0', dueDate: '24 Dec 2025' },
  { id: '4993', issuedDate: '17 Dec 2025', address: '074 Long Union', company: 'Wilson-Lee LLC', companyEmail: 'williamshenry@moon-smith.com', country: 'Montserrat', contact: '(504) 859-2893', name: 'Christina Collier', service: 'UI/UX Design & Development', total: 2713, avatar: '', avatarColor: 'success', invoiceStatus: 'Draft', balance: '$407', dueDate: '22 Dec 2025' },
  { id: '4994', issuedDate: '11 Dec 2025', address: '5225 Ford Cape Apt. 840', company: 'Schwartz, Henry and Rhodes Group', companyEmail: 'margaretharvey@russell-murray.com', country: 'Oman', contact: '(758) 403-7718', name: 'David Flores', service: 'Template Customization', total: 4309, avatar: '/images/avatars/5.png', invoiceStatus: 'Paid', balance: '-$205', dueDate: '10 Dec 2025' },
  { id: '4995', issuedDate: '26 Dec 2025', address: '23717 James Club Suite 277', company: 'Henderson-Holder PLC', companyEmail: 'dianarodriguez@villegas.com', country: 'Cambodia', contact: '(292) 873-8254', name: 'Valerie Perez', service: 'Software Development', total: 3367, avatar: '/images/avatars/6.png', invoiceStatus: 'Downloaded', balance: '0', dueDate: '24 Dec 2025' },
  { id: '4996', issuedDate: '15 Dec 2025', address: '4528 Myers Gateway', company: 'Page-Wise PLC', companyEmail: 'bwilson@norris-brock.com', country: 'Guam', contact: '(956) 803-2008', name: 'Susan Dickerson', service: 'Software Development', total: 4776, avatar: '/images/avatars/7.png', invoiceStatus: 'Downloaded', balance: '$305', dueDate: '02 Dec 2025' },
]

const permissions = [
  { id: 1, name: 'Management', assignedTo: ['administrator'], createdDate: '14 Apr 2021, 8:43 PM' },
  { id: 2, name: 'Manage Billing & Roles', assignedTo: ['administrator'], createdDate: '16 Sep 2021, 5:20 PM' },
  { id: 3, name: 'Add & Remove Users', assignedTo: ['administrator', 'manager'], createdDate: '14 Oct 2021, 10:20 AM' },
  { id: 4, name: 'Project Planning', assignedTo: ['administrator', 'users', 'support'], createdDate: '14 Oct 2021, 10:20 AM' },
  { id: 5, name: 'Manage Email Sequences', assignedTo: ['administrator', 'users', 'support'], createdDate: '23 Aug 2021, 2:00 PM' },
  { id: 6, name: 'Client Communication', assignedTo: ['administrator', 'manager'], createdDate: '15 Apr 2021, 11:30 AM' },
  { id: 7, name: 'Only View', assignedTo: ['administrator', 'restricted-user'], createdDate: '04 Dec 2021, 8:15 PM' },
  { id: 8, name: 'Financial Management', assignedTo: ['administrator', 'manager'], createdDate: '25 Feb 2021, 10:30 AM' },
  { id: 9, name: "Manage Others' Tasks", assignedTo: ['administrator', 'support'], createdDate: '04 Nov 2021, 11:45 AM' },
]

const calendarEvents = [
  { id: '1', url: '', title: 'Design Review', start: new Date(), endDate: new Date(Date.now() + 86400000), allDay: false, calendar: 'Business' },
  { id: '2', url: '', title: 'Meeting With Client', start: new Date(2025, 0, 15), endDate: new Date(2025, 0, 16), allDay: true, calendar: 'Business' },
  { id: '3', url: '', title: 'Family Trip', start: new Date(2025, 0, 20), endDate: new Date(2025, 0, 23), allDay: true, calendar: 'Holiday' },
  { id: '4', url: '', title: "Doctor's Appointment", start: new Date(2025, 0, 10), endDate: new Date(2025, 0, 10), allDay: true, calendar: 'Personal' },
  { id: '5', url: '', title: 'Dart Game?', start: new Date(2025, 0, 8), endDate: new Date(2025, 0, 8), allDay: true, calendar: 'ETC' },
  { id: '6', url: '', title: 'Meditation', start: new Date(2025, 0, 5), endDate: new Date(2025, 0, 5), allDay: true, calendar: 'Personal' },
  { id: '7', url: '', title: 'Dinner', start: new Date(2025, 0, 12), endDate: new Date(2025, 0, 12), allDay: true, calendar: 'Family' },
  { id: '8', url: '', title: 'Product Review', start: new Date(2025, 0, 18), endDate: new Date(2025, 0, 18), allDay: true, calendar: 'Business' },
  { id: '9', url: '', title: 'Monthly Meeting', start: new Date(2025, 1, 1), endDate: new Date(2025, 1, 1), allDay: true, calendar: 'Business' },
  { id: '10', url: '', title: 'Monthly Checkup', start: new Date(2024, 11, 15), endDate: new Date(2024, 11, 15), allDay: true, calendar: 'Personal' },
]

const chatContacts = [
  { id: 1, fullName: 'John Doe', role: 'Admin', about: 'Dessert chocolate cake lemon drops jujubes.', avatar: '/images/avatars/1.png', status: 'online' },
  { id: 2, fullName: 'Felecia Rower', role: 'Frontend Developer', about: 'Cake pie jelly jelly beans.', avatar: '/images/avatars/2.png', status: 'offline' },
  { id: 3, fullName: 'Adalberto Granzin', role: 'UI/UX Designer', about: 'Toffee caramels jelly-o tart gummi bears cake.', avatarColor: 'primary', status: 'busy' },
  { id: 4, fullName: 'Joaquina Weisenborn', role: 'Town planner', about: 'Soufflé soufflé caramels sweet roll.', avatar: '/images/avatars/8.png', status: 'busy' },
  { id: 5, fullName: 'Margot Henschke', role: 'Dietitian', about: 'Cake pie jelly jelly beans.', avatarColor: 'success', status: 'busy' },
  { id: 6, fullName: 'Bridgett Omohundro', role: 'Designer, television/film set', about: 'Gummies gummi bears I love candy icing apple pie.', avatarColor: 'warning', status: 'offline' },
  { id: 7, fullName: 'Sal Piggee', role: 'Marketing executive', about: 'Toffee caramels jelly-o tart gummi bears cake.', avatarColor: 'info', status: 'online' },
  { id: 8, fullName: 'Miguel Guelff', role: 'Special educational needs teacher', about: 'Biscuit powder oat cake donut brownie ice cream.', avatar: '/images/avatars/7.png', status: 'online' },
]

const reviews = [
  { productId: 1, reviewer: 'Zane Scraggs', email: 'zscraggs0@flavors.me', avatar: '/images/avatars/1.png', date: '5/28/2020', status: 'Published', review: 2, head: 'lorem ipsum dolor', para: 'Nulla ut erat id mauris vulputate elementum.' },
  { productId: 2, reviewer: 'Stacey Hallgalley', email: 'shallgalley1@google.nl', avatar: '/images/avatars/2.png', date: '3/21/2021', status: 'Published', review: 5, head: 'libero ut', para: 'Aliquam quis turpis eget elit sodales scelerisque.' },
  { productId: 3, reviewer: 'Francyne Coulthurst', email: 'fcoulthurst2@upenn.edu', avatar: '/images/avatars/3.png', date: '8/10/2020', status: 'Published', review: 2, head: 'neque libero convallis', para: 'Phasellus in felis. Donec semper sapien a libero.' },
  { productId: 4, reviewer: 'Nate De Mitris', email: 'nde3@intel.com', avatar: '/images/avatars/4.png', date: '12/18/2021', status: 'Pending', review: 3, head: 'accumsan tellus nisi eu', para: 'Praesent id massa id nisl venenatis lacinia.' },
  { productId: 5, reviewer: 'Ethel Zanardii', email: 'ezanardii4@mapy.cz', avatar: '/images/avatars/5.png', date: '6/12/2020', status: 'Pending', review: 1, head: 'etiam faucibus cursus', para: 'Cras non velit nec nisi vulputate nonummy.' },
]

async function main() {
  console.log('🌱 Starting seed...')

  // Clear existing data
  await prisma.chatMessage.deleteMany()
  await prisma.chat.deleteMany()
  await prisma.chatContact.deleteMany()
  await prisma.calendarEvent.deleteMany()
  await prisma.permission.deleteMany()
  await prisma.review.deleteMany()
  await prisma.product.deleteMany()
  await prisma.invoice.deleteMany()
  await prisma.appUser.deleteMany()

  console.log('✅ Cleared existing data')

  // Seed AppUsers
  for (const user of users) {
    await prisma.appUser.create({ data: user })
  }
  console.log(`✅ Created ${users.length} users`)

  // Seed Products
  for (const product of products) {
    await prisma.product.create({ data: product })
  }
  console.log(`✅ Created ${products.length} products`)

  // Seed Reviews
  for (const review of reviews) {
    await prisma.review.create({ data: review })
  }
  console.log(`✅ Created ${reviews.length} reviews`)

  // Seed Invoices
  for (const invoice of invoices) {
    await prisma.invoice.create({ data: invoice })
  }
  console.log(`✅ Created ${invoices.length} invoices`)

  // Seed Permissions
  for (const permission of permissions) {
    await prisma.permission.create({ data: permission })
  }
  console.log(`✅ Created ${permissions.length} permissions`)

  // Seed Calendar Events
  for (const event of calendarEvents) {
    await prisma.calendarEvent.create({ data: event })
  }
  console.log(`✅ Created ${calendarEvents.length} calendar events`)

  // Seed Chat Contacts
  for (const contact of chatContacts) {
    await prisma.chatContact.create({ data: contact })
  }
  console.log(`✅ Created ${chatContacts.length} chat contacts`)

  console.log('🎉 Seed completed successfully!')
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
