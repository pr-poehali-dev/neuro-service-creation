import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img 
                src="https://cdn.poehali.dev/files/7a9342ee-6133-4b6e-bbcc-8ba9e2856d4f.jpg" 
                alt="Нейро логотип" 
                className="w-8 h-8 mr-2 rounded-full"
              />
              <span className="text-2xl font-black text-blue-600 tracking-tighter uppercase" style={{fontFamily: 'system-ui, -apple-system, sans-serif', letterSpacing: '-0.05em'}}>Нейро</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors font-semibold">Главная</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">О нас</a>
              <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors">Прайс</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Контакты</a>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Заказать ремонт
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Экспресс-ремонт<br />
              <span className="text-blue-600">за 30 минут</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Быстрый и качественный ремонт телефонов, ноутбуков и другой техники. 
              Бесплатная диагностика и гарантия 1 месяц.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8">
                Заказать ремонт
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                Бесплатная диагностика
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Наши преимущества</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Мы предоставляем быстрый и качественный сервис для всех видов техники
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="Clock" className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Экспресс-ремонт</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Большинство ремонтов выполняем за 30 минут
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="Search" className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-lg">Бесплатная диагностика</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Точно определим причину поломки без доплат
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="Car" className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-lg">Выезд мастера</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Приедем к вам домой или в офис в удобное время
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle className="text-lg">Гарантия 1 месяц</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Полная гарантия на все виды выполненных работ
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="/img/d3ec0e56-10f8-4310-87f6-f40a7f4f7fed.jpg" 
                alt="Профессиональный ремонт техники" 
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-blue-600 bg-opacity-10 rounded-lg"></div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">О сервисе "Нейро"</h2>
              <p className="text-gray-600 mb-4">
                Мы специализируемся на быстром и качественном ремонте мобильных устройств, 
                ноутбуков и другой электроники. Наш опыт работы более 5 лет.
              </p>
              <p className="text-gray-600 mb-6">
                Используем только оригинальные запчасти и современное оборудование для диагностики. 
                Все мастера имеют профильное образование и регулярно проходят обучение.
              </p>
              <div className="flex space-x-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">500+</div>
                  <div className="text-gray-600">Отремонтированных устройств</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">30мин</div>
                  <div className="text-gray-600">Среднее время ремонта</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">98%</div>
                  <div className="text-gray-600">Довольных клиентов</div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Что мы ремонтируем:</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Icon name="Smartphone" className="w-5 h-5 text-blue-600 mr-3" />
                  <span>Смартфоны и планшеты</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Laptop" className="w-5 h-5 text-blue-600 mr-3" />
                  <span>Ноутбуки и компьютеры</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Headphones" className="w-5 h-5 text-blue-600 mr-3" />
                  <span>Наушники и аудиотехника</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Monitor" className="w-5 h-5 text-blue-600 mr-3" />
                  <span>Мониторы и телевизоры</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Watch" className="w-5 h-5 text-blue-600 mr-3" />
                  <span>Умные часы и фитнес-браслеты</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Прайс-лист</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Честные цены на все виды ремонта. Окончательная стоимость определяется после диагностики.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Smartphone" className="w-5 h-5 mr-2" />
                  Телефоны
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Замена экрана</span>
                    <span className="font-semibold">от 2000₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Замена батареи</span>
                    <span className="font-semibold">от 1500₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Ремонт разъема</span>
                    <span className="font-semibold">от 1000₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Восстановление ПО</span>
                    <span className="font-semibold">от 800₽</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Laptop" className="w-5 h-5 mr-2" />
                  Ноутбуки
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Замена экрана</span>
                    <span className="font-semibold">от 5000₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Чистка от пыли</span>
                    <span className="font-semibold">от 2000₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Ремонт клавиатуры</span>
                    <span className="font-semibold">от 1500₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Установка SSD</span>
                    <span className="font-semibold">от 1000₽</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Headphones" className="w-5 h-5 mr-2" />
                  Другая техника
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Наушники</span>
                    <span className="font-semibold">от 500₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Умные часы</span>
                    <span className="font-semibold">от 1000₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Планшеты</span>
                    <span className="font-semibold">от 1500₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Мониторы</span>
                    <span className="font-semibold">от 2000₽</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              * Диагностика бесплатна при заказе ремонта
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Узнать точную стоимость
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Контакты</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Свяжитесь с нами любым удобным способом или приезжайте в наш сервис
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Информация для связи</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center">
                    <Icon name="Phone" className="w-5 h-5 text-blue-600 mr-3" />
                    <div>
                      <div className="font-semibold">Телефон</div>
                      <div className="text-gray-600">+7 (999) 123-45-67</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Mail" className="w-5 h-5 text-blue-600 mr-3" />
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-gray-600">info@neuro-repair.ru</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Icon name="MapPin" className="w-5 h-5 text-blue-600 mr-3" />
                    <div>
                      <div className="font-semibold">Адрес</div>
                      <div className="text-gray-600">ул. Центральная, 123<br />Москва, 123456</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Clock" className="w-5 h-5 text-blue-600 mr-3" />
                    <div>
                      <div className="font-semibold">Время работы</div>
                      <div className="text-gray-600">Пн-Пт: 9:00-20:00<br />Сб-Вс: 10:00-18:00</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Быстрый заказ</CardTitle>
                  <CardDescription>
                    Оставьте заявку и мы свяжемся с вами в течение 5 минут
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-1 block">Имя</label>
                      <input 
                        type="text" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Ваше имя"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-1 block">Телефон</label>
                      <input 
                        type="tel" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="+7 (999) 123-45-67"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">Устройство</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>Выберите тип устройства</option>
                      <option>Смартфон</option>
                      <option>Ноутбук</option>
                      <option>Планшет</option>
                      <option>Другое</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">Описание проблемы</label>
                    <textarea 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-24 resize-none"
                      placeholder="Опишите что случилось с устройством..."
                    ></textarea>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Отправить заявку
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Нейро</h3>
              <p className="text-gray-400 mb-4">
                Быстрый и качественный ремонт электроники в Москве. 
                Экспресс-ремонт за 30 минут с гарантией.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Icon name="Phone" className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Icon name="Mail" className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Icon name="MapPin" className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Ремонт телефонов</a></li>
                <li><a href="#" className="hover:text-white">Ремонт ноутбуков</a></li>
                <li><a href="#" className="hover:text-white">Ремонт планшетов</a></li>
                <li><a href="#" className="hover:text-white">Диагностика</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+7 (999) 123-45-67</li>
                <li>info@neuro-repair.ru</li>
                <li>ул. Центральная, 123</li>
                <li>Москва, 123456</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Нейро. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;