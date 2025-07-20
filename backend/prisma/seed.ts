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
                name: 'Nature Tours',
                slug: 'nature-tours',
                description: 'Experience Sri Lanka\'s natural beauty',
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
                name: 'Nuwara Eliya',
                slug: 'nuwara-eliya',
                description: 'Little England with cool climate and tea estates',
                country: 'Sri Lanka',
                coordinates: { lat: 6.9497, lng: 80.7891 },
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

    // Create sample tours matching your data structure
    const tours = await Promise.all([
        prisma.tour.create({
            data: {
                title: 'Cultural Triangle Adventure',
                slug: 'cultural-triangle-adventure',
                description: 'Explore the ancient wonders of Sri Lanka\'s Cultural Triangle, including Sigiriya Rock Fortress, Polonnaruwa ancient city, and Dambulla Cave Temple.',
                shortDesc: 'Ancient wonders and cultural heritage of Sri Lanka',
                price: 250,
                duration: 3,
                maxPeople: 15,
                difficulty: 'Moderate',
                category: 'cultural',
                featured: true,
                images: [
                    'https://images.unsplash.com/photo-1566552881560-0be862a7c445',
                    'https://images.unsplash.com/photo-1578662996442-48f60103fc96',
                    'https://images.unsplash.com/photo-1578992687673-76d031a4b1fa'
                ],
                image: '/src/assets/img/card-CulturalTriangle.jpg',
                location: 'Central Province',
                coordinates: { lat: 7.9570, lng: 80.7603 },
                highlights: ['Sigiriya Rock Fortress', 'Polonnaruwa Ancient City', 'Dambulla Cave Temple'],
                rating: 4.8,
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
                title: 'Nuwara Eliya',
                slug: 'nuwara-eliya',
                description: 'Little England with cool climate and tea estates. Experience the colonial charm and stunning landscapes of Sri Lanka\'s hill country.',
                shortDesc: 'Little England with cool climate and tea estates',
                price: 139,
                duration: 2,
                maxPeople: 20,
                difficulty: 'Easy',
                category: 'nature',
                featured: true,
                images: [
                    'https://images.unsplash.com/photo-1544735716-392fe2489ffa',
                    'https://images.unsplash.com/photo-1578409712690-80d628c84ac2',
                    'https://images.unsplash.com/photo-1566552881560-0be862a7c445'
                ],
                image: '/src/assets/img/card-NuwaraEliya.jpg',
                location: 'Central Province',
                coordinates: { lat: 6.9497, lng: 80.7891 },
                highlights: ['Tea Plantations', 'Gregory Lake', 'Strawberry Fields'],
                rating: 4.5,
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
                title: 'Kandy to Ella Train Journey',
                slug: 'kandy-ella-train-journey',
                description: 'Experience one of the world\'s most scenic train rides through Sri Lanka\'s hill country. Journey from Kandy to Ella through tea plantations and mountains.',
                shortDesc: 'Scenic train journey through Sri Lankan hill country',
                price: 180,
                duration: 2,
                maxPeople: 20,
                difficulty: 'Easy',
                category: 'scenic',
                featured: true,
                images: [
                    'https://images.unsplash.com/photo-1544735716-392fe2489ffa',
                    'https://images.unsplash.com/photo-1578409712690-80d628c84ac2'
                ],
                image: '/src/assets/img/card-TrainJourney.jpg',
                location: 'Kandy to Ella',
                coordinates: { lat: 7.2906, lng: 80.6337 },
                highlights: ['Scenic Train Ride', 'Nine Arch Bridge', 'Tea Country Views'],
                rating: 4.7,
                startDates: [
                    new Date('2025-07-20'),
                    new Date('2025-08-05'),
                    new Date('2025-08-20')
                ],
            },
        }),
        prisma.tour.create({
            data: {
                title: 'Yala National Park Safari',
                slug: 'yala-national-park-safari',
                description: 'Embark on an exciting wildlife safari in Yala National Park, home to the highest density of leopards in the world.',
                shortDesc: 'Wildlife safari in Sri Lanka\'s premier national park',
                price: 120,
                duration: 1,
                maxPeople: 8,
                difficulty: 'Easy',
                category: 'wildlife',
                featured: false,
                images: [
                    'https://images.unsplash.com/photo-1549366021-9f761d040a94',
                    'https://images.unsplash.com/photo-1564760055775-d63b17a55c44'
                ],
                image: '/src/assets/img/card-YalaSafari.jpg',
                location: 'Southern Province',
                coordinates: { lat: 6.3725, lng: 81.5185 },
                highlights: ['Leopard Spotting', 'Elephant Herds', 'Bird Watching'],
                rating: 4.6,
                startDates: [
                    new Date('2025-07-25'),
                    new Date('2025-08-10'),
                    new Date('2025-08-25')
                ],
            },
        }),
        prisma.tour.create({
            data: {
                title: 'Adam\'s Peak Sunrise Hike',
                slug: 'adams-peak-sunrise-hike',
                description: 'Challenge yourself with a night hike to the summit of Adam\'s Peak (Sri Pada), one of Sri Lanka\'s most sacred mountains. Witness a spectacular sunrise from 2,243 meters above sea level.',
                shortDesc: 'Sacred mountain sunrise hike experience',
                price: 85,
                duration: 1,
                maxPeople: 12,
                difficulty: 'Challenging',
                category: 'adventure',
                featured: false,
                images: [
                    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
                    'https://images.unsplash.com/photo-1464822759844-d150ad6d1ee4'
                ],
                image: '/src/assets/img/card-AdamsPeak.jpg',
                location: 'Ratnapura District',
                coordinates: { lat: 6.8092, lng: 80.4989 },
                highlights: ['Sacred Summit', 'Sunrise Views', 'Pilgrimage Trail'],
                rating: 4.9,
                startDates: [
                    new Date('2025-08-03'),
                    new Date('2025-08-17'),
                    new Date('2025-09-03')
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
        // Nuwara Eliya itinerary
        {
            tourId: tours[1].id,
            items: [
                {
                    day: 1,
                    title: 'Nuwara Eliya Arrival & Tea Plantation',
                    description: 'Arrive in Nuwara Eliya and visit a working tea plantation. Learn about tea processing and enjoy fresh Ceylon tea with stunning mountain views.',
                    activities: ['Tea plantation tour', 'Tea factory visit', 'Tea tasting', 'Gregory Lake visit'],
                    meals: ['Lunch', 'Dinner'],
                    accommodation: 'Hill Club Hotel'
                },
                {
                    day: 2,
                    title: 'Strawberry Fields & Departure',
                    description: 'Visit strawberry fields and enjoy fresh strawberries. Explore the colonial architecture of Nuwara Eliya town before departure.',
                    activities: ['Strawberry farm visit', 'Town exploration', 'Post Office visit', 'Shopping'],
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

    // Create inclusions and exclusions (only for the 5 tours we created)
    const inclusionsData = [
        { tourId: tours[0].id, items: ['Professional guide', 'Entrance fees', 'Transportation', 'Accommodation', 'Meals as specified', 'Bottled water'] },
        { tourId: tours[1].id, items: ['Professional guide', 'Tea plantation tour', 'Accommodation', 'Breakfast', 'Transportation', 'Tea tasting'] },
        { tourId: tours[2].id, items: ['Train tickets', 'Professional guide', 'Accommodation in Ella', 'Breakfast', 'Transportation', 'Entrance fees'] },
        { tourId: tours[3].id, items: ['Safari vehicle', 'Professional guide', 'Park entrance fees', 'Lunch', 'Bottled water', 'Binoculars'] },
        { tourId: tours[4].id, items: ['Professional guide', 'Transportation', 'Flashlights', 'First aid kit', 'Breakfast after hike', 'Certificate'] }
    ];

    const exclusionsData = [
        { tourId: tours[0].id, items: ['International flights', 'Visa fees', 'Personal expenses', 'Tips', 'Alcoholic beverages', 'Travel insurance'] },
        { tourId: tours[1].id, items: ['International flights', 'Visa fees', 'Personal expenses', 'Dinner on day 1', 'Tips', 'Travel insurance'] },
        { tourId: tours[2].id, items: ['International flights', 'Visa fees', 'Personal expenses', 'Dinner on day 1', 'Tips', 'Travel insurance'] },
        { tourId: tours[3].id, items: ['International flights', 'Accommodation', 'Dinner', 'Personal expenses', 'Tips', 'Travel insurance'] },
        { tourId: tours[4].id, items: ['Accommodation', 'Other meals', 'Personal expenses', 'Warm clothing rental', 'Tips', 'Travel insurance'] }
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

    // Create sample bookings
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
                tourId: tours[1].id,
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
                totalPrice: 200.00,
                status: 'COMPLETED',
            },
        }),
    ]);

    console.log('✅ Bookings created');

    // Create sample reviews
    const reviews = await Promise.all([
        prisma.review.create({
            data: {
                tourId: tours[1].id,
                name: 'Sarah Johnson',
                email: 'sarah.j@example.com',
                rating: 5,
                title: 'Beautiful tea country experience!',
                comment: 'Nuwara Eliya was absolutely magical. The tea plantations were stunning and the cool weather was a nice break from the heat. Highly recommend!',
                verified: true,
            },
        }),
        prisma.review.create({
            data: {
                tourId: tours[0].id,
                name: 'David Brown',
                email: 'david.b@example.com',
                rating: 5,
                title: 'Incredible cultural journey',
                comment: 'The Cultural Triangle tour exceeded all expectations. Sigiriya was breathtaking and our guide was incredibly knowledgeable.',
                verified: false,
            },
        }),
        prisma.review.create({
            data: {
                tourId: tours[2].id,
                name: 'Emma Davis',
                email: 'emma.d@example.com',
                rating: 5,
                title: 'Most scenic train ride ever!',
                comment: 'The train journey from Kandy to Ella was absolutely spectacular. The views were incredible and the Nine Arch Bridge was amazing!',
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
    console.log('Sample tour data matches your format:');
    console.log('- Nuwara Eliya: $139, 2 Days, Easy difficulty, nature category');
    console.log('- Includes highlights: Tea Plantations, Gregory Lake, Strawberry Fields');
    console.log('\n📱 API Endpoints:');
    console.log('- GET /api/tours - Get all tours with filtering');
    console.log('- GET /api/tours/featured - Get featured tours');
    console.log('- GET /api/tours/category/nature - Get tours by category');
    console.log('- GET /api/tours/slug/nuwara-eliya - Get tour by slug');
    console.log('- GET /api/tours/1 - Get tour by ID');
}

main()
    .catch((e) => {
        console.error('❌ Error during seeding:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });