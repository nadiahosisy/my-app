import React from "react";

const Body = () => {
  return (
    <div>
      {" "}
      <div className=" min-h-screen text-gold-100 h-screen bg-custom-pattern bg-cover bg-center">
        {/* Welcome Section */}
        <header className="  bg-gray-800 py-16">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">
              ברוכים הבאים לבית הכנאפה
            </h1>
            <p className="text-lg mb-6 text-gray-300">
              קנאפה ומטעמים מיוחדים באווירה משפחתית וייחודית
            </p>
            <button className="bg-gold-500 text-gray-900 py-2 px-4 rounded-full hover:bg-gold-400 transition duration-200">
              גלו את התפריט
            </button>
          </div>
        </header>

        {/* Menu Section */}
        <section className="py-12 bg-gray-800">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center text-gold-500 mb-8">
              התפריט שלנו
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Menu Item 1 */}
              <div className="bg-gray-800 shadow-lg rounded-lg p-6 text-center text-gold-500 border border-gold-500">
                <h3 className="text-xl font-semibold mb-2">קנאפה מיוחדת</h3>
                <p className="text-gray-400 mb-4">
                  קנאפה שנמסה בפה עם פיסטוקים ודבש.
                </p>
                <button className="bg-gold-500 text-gray-900 py-2 px-4 rounded-full hover:bg-gold-400 transition duration-200">
                  לפרטים
                </button>
              </div>
              {/* Menu Item 2 */}
              <div className="bg-gray-800 shadow-lg rounded-lg p-6 text-center text-gold-500 border border-gold-500">
                <h3 className="text-xl font-semibold mb-2">וופל בלגי</h3>
                <p className="text-gray-400 mb-4">
                  וופל בלגי חם עם תוספות טעימות כמו פירות ושוקולדים.
                </p>
                <button className="bg-gold-500 text-gray-900 py-2 px-4 rounded-full hover:bg-gold-400 transition duration-200">
                  לפרטים
                </button>
              </div>
              {/* Menu Item 3 */}
              <div className="bg-gray-800 shadow-lg rounded-lg p-6 text-center text-gold-500 border border-gold-500">
                <h3 className="text-xl font-semibold mb-2">פנקייקים מתוקים</h3>
                <p className="text-gray-400 mb-4">
                  פנקייקים רכים עם מגוון תוספות כמו סירופ שוקולד, דבש ופירות.
                </p>
                <button className="bg-gold-500 text-gray-900 py-2 px-4 rounded-full hover:bg-gold-400 transition duration-200">
                  לפרטים
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-gray-900 py-12">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-gold-500 mb-8">
              לקוחות ממליצים
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-gray-800 shadow-lg rounded-lg p-6 border border-gold-500">
                <p className="text-gray-300">
                  "המקום המושלם לקנאפה! אווירה נהדרת ושירות מעולה!"
                </p>
                <p className="text-gold-500 font-semibold mt-4">- מיכל</p>
              </div>
              {/* Testimonial 2 */}
              <div className="bg-gray-800 shadow-lg rounded-lg p-6 border border-gold-500">
                <p className="text-gray-300">
                  "הקפה הכי טוב ששתיתי. מומלץ בחום!"
                </p>
                <p className="text-gold-500 font-semibold mt-4">- יוסי</p>
              </div>
              {/* Testimonial 3 */}
              <div className="bg-gray-800 shadow-lg rounded-lg p-6 border border-gold-500">
                <p className="text-gray-300">
                  "וופל בלגי חם עם כל התוספות! נהדר עם המשפחה."
                </p>
                <p className="text-gold-500 font-semibold mt-4">- ליאת</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gray-800 text-gold-500 py-12">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">צרו קשר</h2>
            <p>כתובת: רחוב הדוגמא 123, תל אביב</p>
            <p>טלפון: 03-1234567</p>
            <p>אימייל: info@knafeh-cafe.com</p>
            <button className="mt-6 bg-gold-500 text-gray-900 font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-gold-400 transition duration-200">
              שלחו הודעה
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 header-gold-500 py-4">
          <div className="container mx-auto text-center">
            <p>&copy; 2024 בית הכנאפה. כל הזכויות שמורות.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Body;
