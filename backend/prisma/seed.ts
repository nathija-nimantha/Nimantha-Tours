import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log('🌱 Starting database seeding...');

    // Create sample categories
    const categories = await Promise.all([
        prisma.category.create({
            data: {
                name: 'Cultural Tours',
                slug: 'cultural-tours',
                description: 'Explore Sri Lanka\'s rich cultural heritage',
            },
        }),
        prisma.category.create({
            data: {
                name: 'Adventure Tours',
                slug: 'adventure-tours',
                description: 'Thrilling outdoor adventures in Sri Lanka',
            },
        }),
        prisma.category.create({
            data: {
                name: 'Wildlife Tours',
                slug: 'wildlife-tours',
                description: 'Discover Sri Lanka\'s incredible wildlife',
            },
        }),
        prisma.category.create({
            data: {
                name: 'Beach Tours',
                slug: 'beach-tours',
                description: 'Relax on Sri Lanka\'s pristine beaches',
            },
        }),
    ]);

    console.log('✅ Categories created');

    // Create sample destinations
    const destinations = await Promise.all([
        prisma.destination.create({
            data: {
                name: 'Sigiriya',
                slug: 'sigiriya',
                description: 'Ancient rock fortress and UNESCO World Heritage Site',
                country: 'Sri Lanka',
                coordinates: { lat: 7.9570, lng: 80.7603 },
                popular: true,
            },
        }),
        prisma.destination.create({
            data: {
                name: 'Kandy',
                slug: 'kandy',
                description: 'Cultural capital and home to the Temple of the Tooth',
                country: 'Sri Lanka',
                coordinates: { lat: 7.2906, lng: 80.6337 },
                popular: true,
            },
        }),
        prisma.destination.create({
            data: {
                name: 'Ella',
                slug: 'ella',
                description: 'Scenic hill station with breathtaking views',
                country: 'Sri Lanka',
                coordinates: { lat: 6.8667, lng: 81.0467 },
                popular: true,
            },
        }),
    ]);

    console.log('✅ Destinations created');

    // Create sample tours
    const tours = await Promise.all([
        prisma.tour.create({
            data: {
                title: 'Cultural Triangle Adventure',
                slug: 'cultural-triangle-adventure',
                description: 'Explore the ancient wonders of Sri Lanka\'s Cultural Triangle, including Sigiriya Rock Fortress, Polonnaruwa ancient city, and Dambulla Cave Temple. This comprehensive tour takes you through centuries of history and culture.',
                shortDesc: 'Ancient wonders and cultural heritage of Sri Lanka',
                price: 250.00,
                duration: 3,
                maxPeople: 15,
                difficulty: 'MODERATE',
                category: 'Cultural',
                featured: true,
                images: [
                    'https://images.unsplash.com/photo-1566552881560-0be862a7c445',
                    'https://images.unsplash.com/photo-1578662996442-48f60103fc96',
                    'https://images.unsplash.com/photo-1578992687673-76d031a4b1fa'
                ],
                location: 'Sigiriya, Polonnaruwa, Dambulla',
                coordinates: { lat: 7.9570, lng: 80.7603 },
                startDates: [
                    new Date('2025-08-01'),
                    new Date('2025-08-15'),
                    new Date('2025-09-01'),
                    new Date('2025-09-15')
                ],
            },
        }),
        prisma.tour.create({
            data: {
                title: 'Kandy to Ella Train Journey',
                slug: 'kandy-ella-train-journey',
                description: 'Experience one of the world\'s most scenic train rides through Sri Lanka\'s hill country. Journey from the cultural capital of Kandy to the charming town of Ella, passing through tea plantations, mountains, and the famous Nine Arch Bridge.',
                shortDesc: 'Scenic train journey through Sri Lankan hill country',
                price: 180.00,
                duration: 2,
                maxPeople: 20,
                difficulty: 'EASY',
                category: 'Scenic',
                featured: true,
                images: [
                    'https://images.unsplash.com/photo-1544735716-392fe2489ffa',
                    'https://images.unsplash.com/photo-1578409712690-80d628c84ac2',
                    'https://images.unsplash.com/photo-1566552881560-0be862a7c445'
                ],
                location: 'Kandy to Ella',
                coordinates: { lat: 7.2906, lng: 80.6337 },
                startDates: [
                    new Date('2025-07-20'),
                    new Date('2025-08-05'),
                    new Date('2025-08-20'),
                    new Date('2025-09-05')
                ],
            },
        }),
        prisma.tour.create({
            data: {
                title: 'Yala National Park Safari',
                slug: 'yala-national-park-safari',
                description: 'Embark on an exciting wildlife safari in Yala National Park, home to the highest density of leopards in the world. Spot elephants, sloth bears, crocodiles, and over 200 bird species in their natural habitat.',
                shortDesc: 'Wildlife safari in Sri Lanka\'s premier national park',
                price: 120.00,
                duration: 1,
                maxPeople: 8,
                difficulty: 'EASY',
                category: 'Wildlife',
                featured: false,
                images: [
                    'https://images.unsplash.com/photo-1549366021-9f761d040a94',
                    'https://images.unsplash.com/photo-1564760055775-d63b17a55c44',
                    'https://images.unsplash.com/photo-1570197788417-0e82375c9371'
                ],
                location: 'Yala National Park',
                coordinates: { lat: 6.3725, lng: 81.5185 },
                startDates: [
                    new Date('2025-07-25'),
                    new Date('2025-08-10'),
                    new Date('2025-08-25'),
                    new Date('2025-09-10')
                ],
            },
        }),
        prisma.tour.create({
            data: {
                title: 'Adam\'s Peak Sunrise Hike',
                slug: 'adams-peak-sunrise-hike',
                description: 'Challenge yourself with a night hike to the summit of Adam\'s Peak (Sri Pada), one of Sri Lanka\'s most sacred mountains. Witness a spectacular sunrise from 2,243 meters above sea level.',
                shortDesc: 'Sacred mountain sunrise hike experience',
                price: 85.00,
                duration: 1,
                maxPeople: 12,
                difficulty: 'CHALLENGING',
                category: 'Adventure',
                featured: false,
                images: [
                    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
                    'https://images.unsplash.com/photo-1464822759844-d150ad6d1ee4',
                    'https://images.unsplash.com/photo-1518837695005-2083093ee35b'
                ],
                location: 'Adam\'s Peak',
                coordinates: { lat: 6.8092, lng: 80.4989 },
                startDates: [
                    new Date('2025-08-03'),
                    new Date('2025-08-17'),
                    new Date('2025-09-03'),
                    new Date('2025-09-17')
                ],
            },
        }),
        prisma.tour.create({
            data: {
                title: 'Galle Fort & South Coast',
                slug: 'galle-fort-south-coast',
                description: 'Discover the colonial charm of Galle Fort, a UNESCO World Heritage Site, and explore the beautiful beaches of Sri Lanka\'s south coast. Includes whale watching opportunities in Mirissa.',
                shortDesc: 'Colonial heritage and coastal beauty',
                price: 200.00,
                duration: 3,
                maxPeople: 18,
                difficulty: 'EASY',
                category: 'Cultural',
                featured: true,
                images: [
                    'https://images.unsplash.com/photo-1578992687673-76d031a4b1fa',
                    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
                    'https://images.unsplash.com/photo-1566552881560-0be862a7c445'
                ],
                location: 'Galle, Unawatuna, Mirissa',
                coordinates: { lat: 6.0535, lng: 80.2210 },
                startDates: [
                    new Date('2025-07-30'),
                    new Date('2025-08-13'),
                    new Date('2025-08-30'),
                    new Date('2025-09-13')
                ],
            },
        }),
    ]);

    console.log('✅ Tours created');

    // Create itineraries for tours
    const itineraries = [
        // Cultural Triangle Adventure itinerary
        {
            tourId: tours[0].id,
            items: [
                {
                    day: 1,
                    title: 'Arrival & Sigiriya Rock Fortress',
                    description: 'Arrive in Sigiriya and check into your accommodation. In the afternoon, climb the iconic Sigiriya Rock Fortress and explore the ancient palace ruins and famous frescoes.',
                    activities: ['Airport pickup', 'Hotel check-in', 'Sigiriya Rock climb', 'Museum visit'],
                    meals: ['Lunch', 'Dinner'],
                    accommodation: 'Hotel Sigiriya'
                },
                {
                    day: 2,
                    title: 'Polonnaruwa Ancient City',
                    description: 'Explore the well-preserved ruins of Polonnaruwa, the second ancient capital of Sri Lanka. Visit the Royal Palace, Gal Vihara rock temples, and other archaeological wonders.',
                    activities: ['Polonnaruwa city tour', 'Archaeological museum', 'Bicycle tour', 'Local village visit'],
                    meals: ['Breakfast', 'Lunch', 'Dinner'],
                    accommodation: 'Hotel Sigiriya'
                },
                {
                    day: 3,
                    title: 'Dambulla & Departure',
                    description: 'Visit the magnificent Dambulla Cave Temple complex with its ancient Buddhist murals and statues. Transfer to Colombo or airport for departure.',
                    activities: ['Dambulla Cave Temple', 'Golden Temple visit', 'Souvenir shopping', 'Airport transfer'],
                    meals: ['Breakfast', 'Lunch'],
                    accommodation: null
                }
            ]
        },
        // Kandy to Ella Train Journey itinerary
        {
            tourId: tours[1].id,
            items: [
                {
                    day: 1,
                    title: 'Kandy Exploration & Train Journey',
                    description: 'Explore Kandy city including the Temple of the Tooth Relic, Royal Botanical Gardens, and local markets. Board the scenic train to Ella in the afternoon.',
                    activities: ['Temple of the Tooth visit', 'Botanical Gardens', 'Kandy Lake walk', 'Train journey to Ella'],
                    meals: ['Breakfast', 'Lunch', 'Dinner'],
                    accommodation: 'Ella Guesthouse'
                },
                {
                    day: 2,
                    title: 'Ella Adventures & Departure',
                    description: 'Hike to Little Adam\'s Peak, visit Nine Arch Bridge, and explore Ella Rock. Experience tea plantation tours and local cuisine before departure.',
                    activities: ['Little Adam\'s Peak hike', 'Nine Arch Bridge visit', 'Tea plantation tour', 'Ella Rock exploration'],
                    meals: ['Breakfast', 'Lunch'],
                    accommodation: null
                }
            ]
        }
    ];

    for (const itinerary of itineraries) {
        for (const item of itinerary.items) {
            await prisma.itinerary.create({
                data: {
                    tourId: itinerary.tourId,
                    day: item.day,
                    title: item.title,
                    description: item.description,
                    activities: item.activities,
                    meals: item.meals,
                    accommodation: item.accommodation,
                },
            });
        }
    }

    console.log('✅ Itineraries created');

    // Create inclusions and exclusions
    const inclusionsData = [
        // Cultural Triangle Adventure
        { tourId: tours[0].id, items: ['Professional guide', 'Entrance fees', 'Transportation', 'Accommodation', 'Meals as specified', 'Bottled water'] },
        // Kandy to Ella Train
        { tourId: tours[1].id, items: ['Train tickets', 'Professional guide', 'Accommodation in Ella', 'Breakfast', 'Transportation', 'Entrance fees'] },
        // Yala Safari
        { tourId: tours[2].id, items: ['Safari vehicle', 'Professional guide', 'Park entrance fees', 'Lunch', 'Bottled water', 'Binoculars'] },
        // Adam\'s Peak
        { tourId: tours[3].id, items: ['Professional guide', 'Transportation', 'Flashlights', 'First aid kit', 'Breakfast after hike', 'Certificate'] },
        // Galle Fort
        { tourId: tours[4].id, items: ['Professional guide', 'Transportation', 'Accommodation', 'Entrance fees', 'Boat trips', 'Meals as specified'] }
    ];

    const exclusionsData = [
        // Cultural Triangle Adventure
        { tourId: tours[0].id, items: ['International flights', 'Visa fees', 'Personal expenses', 'Tips', 'Alcoholic beverages', 'Travel insurance'] },
        // Kandy to Ella Train
        { tourId: tours[1].id, items: ['International flights', 'Visa fees', 'Personal expenses', 'Dinner on day 1', 'Tips', 'Travel insurance'] },
        // Yala Safari
        { tourId: tours[2].id, items: ['International flights', 'Accommodation', 'Dinner', 'Personal expenses', 'Tips', 'Travel insurance'] },
        // Adam\'s Peak
        { tourId: tours[3].id, items: ['Accommodation', 'Other meals', 'Personal expenses', 'Warm clothing rental', 'Tips', 'Travel insurance'] },
        // Galle Fort
        { tourId: tours[4].id, items: ['International flights', 'Visa fees', 'Personal expenses', 'Tips', 'Alcoholic beverages', 'Travel insurance'] }
    ];

    for (const inclusion of inclusionsData) {
        for (const item of inclusion.items) {
            await prisma.inclusion.create({
                data: {
                    tourId: inclusion.tourId,
                    item,
                },
            });
        }
    }

    for (const exclusion of exclusionsData) {
        for (const item of exclusion.items) {
            await prisma.exclusion.create({
                data: {
                    tourId: exclusion.tourId,
                    item,
                },
            });
        }
    }

    console.log('✅ Inclusions and exclusions created');

    // Create sample bookings (guest bookings)
    const bookings = await Promise.all([
        prisma.booking.create({
            data: {
                bookingId: 'BK0001',
                tourId: tours[0].id,
                title: 'Mr',
                name: 'John Smith',
                nationality: 'American',
                email: 'john.smith@example.com',
                phone: '+1234567890',
                startDate: new Date('2025-08-01'),
                nights: 3,
                adults: 2,
                children: 0,
                accommodation: 'Standard Hotel',
                specialNote: 'Vegetarian meals please',
                hearAboutUs: 'Google Search',
                otherDetails: 'First time visiting Sri Lanka',
                totalPrice: 500.00,
                status: 'CONFIRMED',
            },
        }),
        prisma.booking.create({
            data: {
                bookingId: 'BK0002',
                tourId: tours[1].id, // Kandy to Ella
                title: 'Ms',
                name: 'Sarah Johnson',
                nationality: 'British',
                email: 'sarah.j@example.com',
                phone: '+441234567890',
                startDate: new Date('2025-08-05'),
                nights: 2,
                adults: 1,
                children: 1,
                accommodation: 'Boutique Hotel',
                specialNote: 'Child-friendly activities preferred',
                hearAboutUs: 'Social Media',
                otherDetails: 'Celebrating anniversary',
                totalPrice: 270.00, // 180 for adult + 90 for child (50% discount)
                status: 'COMPLETED',
            },
        }),
        prisma.booking.create({
            data: {
                bookingId: 'BK0003',
                tourId: tours[2].id, // Yala Safari
                title: 'Dr',
                name: 'Michael Wilson',
                nationality: 'Canadian',
                email: 'michael.w@example.com',
                phone: '+15551234567',
                startDate: new Date('2025-08-10'),
                nights: 1,
                adults: 2,
                children: 2,
                accommodation: 'Safari Lodge',
                specialNote: 'Interested in wildlife photography',
                hearAboutUs: 'Travel Blog',
                otherDetails: 'Professional photographer',
                totalPrice: 360.00, // 240 for adults + 120 for children
                status: 'PENDING',
            },
        }),
    ]);

    console.log('✅ Bookings created');

    // Create sample reviews (guest reviews)
    const reviews = await Promise.all([
        prisma.review.create({
            data: {
                tourId: tours[1].id, // Kandy to Ella
                name: 'Sarah Johnson',
                email: 'sarah.j@example.com',
                rating: 5,
                title: 'Absolutely breathtaking!',
                comment: 'The train journey from Kandy to Ella was the highlight of my Sri Lanka trip. The scenery was absolutely stunning, and our guide was very knowledgeable about the local culture and history.',
                verified: true,
            },
        }),
        prisma.review.create({
            data: {
                tourId: tours[0].id, // Cultural Triangle
                name: 'David Brown',
                email: 'david.b@example.com',
                rating: 4,
                title: 'Great cultural experience',
                comment: 'Loved exploring the ancient sites. Sigiriya was challenging but worth the climb. The guide provided excellent historical context throughout the tour.',
                verified: false,
            },
        }),
        prisma.review.create({
            data: {
                tourId: tours[2].id, // Yala Safari
                name: 'Emma Davis',
                email: 'emma.d@example.com',
                rating: 5,
                title: 'Amazing wildlife experience',
                comment: 'Saw so many animals including elephants and leopards! The guide was expert at spotting wildlife and very patient with photography.',
                verified: false,
            },
        }),
    ]);

    console.log('✅ Reviews created');

    // Create sample contact inquiries
    await Promise.all([
        prisma.contactInquiry.create({
            data: {
                name: 'Robert Taylor',
                email: 'robert.t@example.com',
                phone: '+1555987654',
                subject: 'Custom tour inquiry',
                message: 'Hi, I\'m interested in a custom 7-day tour covering cultural sites and wildlife. Can you help me plan something?',
                status: 'NEW',
            },
        }),
        prisma.contactInquiry.create({
            data: {
                name: 'Lisa Anderson',
                email: 'lisa.a@example.com',
                subject: 'Group booking question',
                message: 'I have a group of 25 people interested in the Cultural Triangle tour. Do you offer group discounts?',
                status: 'IN_PROGRESS',
            },
        }),
    ]);

    console.log('✅ Contact inquiries created');

    // Create newsletter subscribers
    await Promise.all([
        prisma.newsletter.create({
            data: { email: 'subscriber1@example.com' },
        }),
        prisma.newsletter.create({
            data: { email: 'subscriber2@example.com' },
        }),
        prisma.newsletter.create({
            data: { email: 'subscriber3@example.com' },
        }),
    ]);

    console.log('✅ Newsletter subscribers created');

    console.log('🎉 Database seeding completed successfully!');
    console.log('\n📊 Summary:');
    console.log(`- ${categories.length} categories created`);
    console.log(`- ${destinations.length} destinations created`);
    console.log(`- ${tours.length} tours created`);
    console.log(`- ${bookings.length} bookings created`);
    console.log(`- ${reviews.length} reviews created`);
    console.log('\n🔍 Test Data:');
    console.log('Sample booking check:');
    console.log('- Email: john.smith@example.com, Booking ID: BK0001');
    console.log('- Email: sarah.j@example.com, Booking ID: BK0002');
    console.log('- Email: michael.w@example.com, Booking ID: BK0003');
}

main()
    .catch((e) => {
        console.error('❌ Error during seeding:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });