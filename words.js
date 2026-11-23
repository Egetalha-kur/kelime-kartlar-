// KELİME LİSTESİ
// Her satıra: ingilizce|türkçe  şeklinde yaz. Boş satırlar ve # ile başlayanlar yok sayılır.
// Yeni kelime eklemek için ilgili seviyenin içine yeni satır ekle.
var LEVELS=[
{id:"A1",text:`
family|aile
mother|anne
mom|anne
father|baba
dad|baba
parents|ebeveynler
brother|erkek kardeş
sister|kız kardeş
son|erkek çocuk / oğul
daughter|kız çocuk / kız evlat
child|çocuk
children|çocuklar
baby|bebek
husband|koca / eş
wife|karı / eş
grandfather|büyükbaba / dede
grandmother|büyükanne / nine
grandparents|büyükanne ve büyükbaba
grandson|erkek torun
granddaughter|kız torun
uncle|amca / dayı
aunt|hala / teyze
cousin|kuzen
nephew|erkek yeğen
niece|kız yeğen
friend|arkadaş
best friend|en iyi arkadaş
boyfriend|erkek arkadaş
girlfriend|kız arkadaş
neighbor|komşu
guest|misafir
person|kişi
people|insanlar
man|adam
men|adamlar
woman|kadın
women|kadınlar
boy|erkek çocuk
girl|kız çocuk
kid|çocuk
teenager|ergen / genç
adult|yetişkin
old|yaşlı / eski
young|genç
name|isim / ad
surname|soyadı
age|yaş
birthday|doğum günü
address|adres
phone number|telefon numarası
country|ülke
city|şehir
nationality|milliyet / uyruk
language|dil
job|iş / meslek
student|öğrenci
teacher|öğretmen
doctor|doktor
nurse|hemşire
police officer|polis memuru
driver|şoför
cook|aşçı / yemek pişirmek
chef|şef
waiter|erkek garson
waitress|kadın garson
singer|şarkıcı
actor|erkek oyuncu
actress|kadın oyuncu
artist|sanatçı
writer|yazar
engineer|mühendis
worker|işçi
farmer|çiftçi
manager|yönetici / müdür
boss|patron
customer|müşteri
dentist|diş hekimi
pilot|pilot
soldier|asker
firefighter|itfaiyeci
hairdresser|kuaför
mechanic|tamirci
photographer|fotoğrafçı
shop assistant|tezgahtar
secretary|sekreter
lawyer|avukat
postman|postacı
cleaner|temizlikçi
king|kral
queen|kraliçe
prince|prens
princess|prenses
zero|sıfır
one|bir
two|iki
three|üç
four|dört
five|beş
six|altı
seven|yedi
eight|sekiz
nine|dokuz
ten|on
eleven|on bir
twelve|on iki
thirteen|on üç
fourteen|on dört
fifteen|on beş
sixteen|on altı
seventeen|on yedi
eighteen|on sekiz
nineteen|on dokuz
twenty|yirmi
thirty|otuz
forty|kırk
fifty|elli
sixty|altmış
seventy|yetmiş
eighty|seksen
ninety|doksan
hundred|yüz
thousand|bin
million|milyon
first|birinci
second|ikinci / saniye
third|üçüncü
fourth|dördüncü
fifth|beşinci
last|son / sonuncu
next|sonraki / gelecek
time|zaman / vakit
hour|saat (süre)
minute|dakika
o'clock|saat (tam)
half|buçuk / yarım
quarter|çeyrek
day|gün
week|hafta
weekend|hafta sonu
weekday|hafta içi
month|ay
year|yıl / sene
century|yüzyıl
today|bugün
tonight|bu gece
tomorrow|yarın
yesterday|dün
now|şimdi
later|sonra
soon|yakında
early|erken
late|geç
morning|sabah
afternoon|öğleden sonra
evening|akşam
night|gece
midnight|gece yarısı
noon|öğle
Monday|Pazartesi
Tuesday|Salı
Wednesday|Çarşamba
Thursday|Perşembe
Friday|Cuma
Saturday|Cumartesi
Sunday|Pazar
January|Ocak
February|Şubat
March|Mart
April|Nisan
May|Mayıs
June|Haziran
July|Temmuz
August|Ağustos
September|Eylül
October|Ekim
November|Kasım
December|Aralık
season|mevsim
spring|ilkbahar
summer|yaz
autumn|sonbahar
fall|sonbahar / düşmek
winter|kış
date|tarih
calendar|takvim
clock|duvar saati
watch|kol saati / izlemek
past|geçmiş
future|gelecek
present|şimdiki zaman / hediye
always|her zaman / daima
usually|genellikle
often|sık sık
sometimes|bazen
rarely|nadiren
never|asla / hiçbir zaman
once|bir kez
twice|iki kez
every|her
again|tekrar / yine
already|zaten / çoktan
still|hala
yet|henüz
food|yiyecek / yemek
drink|içecek / içmek
water|su
tea|çay
coffee|kahve
milk|süt
juice|meyve suyu
orange juice|portakal suyu
apple juice|elma suyu
soda|soda / gazoz
cola|kola
beer|bira
wine|şarap
bread|ekmek
butter|tereyağı
cheese|peynir
egg|yumurta
meat|et
chicken|tavuk
beef|sığır eti
pork|domuz eti
fish|balık
sausage|sosis
ham|jambon
rice|pirinç / pilav
pasta|makarna
noodle|erişte
soup|çorba
salad|salata
sandwich|sandviç
hamburger|hamburger
pizza|pizza
chips|patates kızartması / cips
french fries|patates kızartması
salt|tuz
pepper|biber / karabiber
sugar|şeker
oil|yağ / sıvı yağ
olive oil|zeytinyağı
honey|bal
jam|reçel
chocolate|çikolata
cake|kek / pasta
cookie|kurabiye
biscuit|bisküvi
ice cream|dondurma
candy|şekerleme
sweet|tatlı / şeker
fruit|meyve
apple|elma
banana|muz
orange|portakal / turuncu
lemon|limon
strawberry|çilek
grape|üzüm
watermelon|karpuz
melon|kavun
peach|şeftali
pear|armut
cherry|kiraz
pineapple|ananas
vegetable|sebze
tomato|domates
potato|patates
onion|soğan
garlic|sarımsak
carrot|havuç
cucumber|salatalık
lettuce|marul
cabbage|lahana
broccoli|brokoli
corn|mısır
bean|fasulye
pea|bezelye
mushroom|mantar
olive|zeytin
nut|fındık / kuruyemiş
breakfast|kahvaltı
lunch|öğle yemeği
dinner|akşam yemeği
meal|öğün / yemek
snack|atıştırmalık
dessert|tatlı
menu|menü
bill|hesap / fatura
tip|bahşiş
glass|bardak / cam
cup|fincan
bottle|şişe
plate|tabak
bowl|kase
fork|çatal
knife|bıçak
spoon|kaşık
napkin|peçete
hungry|aç
thirsty|susamış
delicious|lezzetli
fresh|taze
sour|ekşi
salty|tuzlu
spicy|baharatlı / acı
bitter|acı
hot|sıcak
cold|soğuk / soğuk algınlığı
warm|ılık
home|ev / yuva
house|ev
apartment|daire
flat|daire / düz
room|oda
living room|oturma odası
bedroom|yatak odası
kitchen|mutfak
bathroom|banyo
toilet|tuvalet
dining room|yemek odası
hall|hol / koridor
garden|bahçe
balcony|balkon
garage|garaj
roof|çatı
wall|duvar
floor|zemin / kat
ceiling|tavan
door|kapı
window|pencere
stairs|merdiven
lift|asansör
elevator|asansör
key|anahtar
lock|kilit
furniture|mobilya
table|masa
chair|sandalye
armchair|koltuk
sofa|kanepe
couch|kanepe
bed|yatak
wardrobe|gardırop
closet|dolap
cupboard|mutfak dolabı
shelf|raf
bookshelf|kitaplık
desk|çalışma masası
lamp|lamba
light|ışık / hafif / açık (renk)
mirror|ayna
picture|resim
painting|tablo
carpet|halı
rug|kilim
curtain|perde
pillow|yastık
blanket|battaniye
sheet|çarşaf
towel|havlu
soap|sabun
shampoo|şampuan
toothbrush|diş fırçası
toothpaste|diş macunu
comb|tarak
brush|fırça
shower|duş
bath|küvet / banyo
sink|lavabo
fridge|buzdolabı
refrigerator|buzdolabı
oven|fırın
stove|ocak
microwave|mikrodalga
washing machine|çamaşır makinesi
dishwasher|bulaşık makinesi
television|televizyon
tv|televizyon
radio|radyo
computer|bilgisayar
laptop|dizüstü bilgisayar
phone|telefon / telefon etmek
mobile phone|cep telefonu
smartphone|akıllı telefon
charger|şarj aleti
camera|kamera / fotoğraf makinesi
box|kutu
bag|çanta / poşet
basket|sepet
trash|çöp
garbage|çöp
bin|çöp kutusu
clothes|giysiler / kıyafetler
shirt|gömlek
t-shirt|tişört
sweater|kazak
jumper|kazak
jacket|ceket
coat|palto / mont
dress|elbise
skirt|etek
pants|pantolon
trousers|pantolon
jeans|kot pantolon
shorts|şort
suit|takım elbise
uniform|üniforma
pajamas|pijama
underwear|iç çamaşırı
sock|çorap
shoe|ayakkabı
boot|bot / çizme
sneaker|spor ayakkabı
trainer|spor ayakkabı
sandal|sandalet
hat|şapka
cap|kasket / şapka
scarf|atkı / eşarp
glove|eldiven
belt|kemer
tie|kravat
glasses|gözlük
sunglasses|güneş gözlüğü
ring|yüzük
necklace|kolye
earring|küpe
bracelet|bilezik
wallet|cüzdan
purse|el çantası / cüzdan
backpack|sırt çantası
umbrella|şemsiye
pocket|cep
button|düğme
zipper|fermuar
size|beden / boyut
cotton|pamuk
leather|deri
wool|yün
body|vücut
head|baş / kafa
hair|saç
face|yüz
eye|göz
ear|kulak
nose|burun
mouth|ağız
lip|dudak
tooth|diş
teeth|dişler
tongue|dil
neck|boyun
throat|boğaz
shoulder|omuz
arm|kol
elbow|dirsek
hand|el
finger|parmak
nail|tırnak
chest|göğüs
stomach|mide / karın
back|sırt / bel / geri
leg|bacak
knee|diz
foot|ayak
feet|ayaklar
toe|ayak parmağı
skin|deri / cilt
bone|kemik
blood|kan
heart|kalp
brain|beyin
health|sağlık
healthy|sağlıklı
sick|hasta
ill|hasta
pain|ağrı / acı
headache|baş ağrısı
toothache|diş ağrısı
stomachache|karın ağrısı
flu|grip
fever|ateş
cough|öksürük
medicine|ilaç
pill|hap
hospital|hastane
clinic|klinik
pharmacy|eczane
ambulance|ambulans
accident|kaza
bandage|yara bandı / sargı
exercise|egzersiz / egzersiz yapmak
sleep|uyku / uyumak
rest|dinlenme / dinlenmek
place|yer
town|kasaba
village|köy
capital|başkent
street|cadde / sokak
road|yol
avenue|bulvar
square|meydan / kare
bridge|köprü
corner|köşe
park|park
playground|oyun alanı
school|okul
university|üniversite
college|kolej / üniversite
library|kütüphane
museum|müze
cinema|sinema
movie theater|sinema
theater|tiyatro
restaurant|restoran
cafe|kafe
bar|bar
hotel|otel
bank|banka
post office|postane
police station|polis karakolu
fire station|itfaiye istasyonu
supermarket|süpermarket
market|pazar / market
shop|dükkan / mağaza
store|mağaza
shopping mall|alışveriş merkezi
bakery|fırın
butcher|kasap
bookshop|kitapçı
bookstore|kitapçı
airport|havalimanı
station|istasyon
train station|tren istasyonu
bus stop|otobüs durağı
subway|metro
underground|metro
port|liman
church|kilise
mosque|cami
temple|tapınak
stadium|stadyum
gym|spor salonu
swimming pool|yüzme havuzu
zoo|hayvanat bahçesi
farm|çiftlik
factory|fabrika
office|ofis
building|bina
map|harita
north|kuzey
south|güney
east|doğu
west|batı
left|sol
right|sağ / doğru
straight|düz
up|yukarı
down|aşağı
in|içinde
on|üstünde
under|altında
next to|bitişiğinde / yanında
near|yakınında
far|uzak
between|arasında
behind|arkasında
in front of|önünde
opposite|karşısında
inside|içeride
outside|dışarıda
here|burada
there|orada
everywhere|her yerde
somewhere|bir yerde
nowhere|hiçbir yerde
transport|ulaşım
travel|seyahat / seyahat etmek
trip|gezi / yolculuk
journey|yolculuk
holiday|tatil
vacation|tatil
car|araba
bus|otobüs
train|tren
plane|uçak
airplane|uçak
bicycle|bisiklet
bike|bisiklet
motorcycle|motosiklet
motorbike|motosiklet
taxi|taksi
cab|taksi
boat|tekne / bot
ship|gemi
ferry|feribot
truck|kamyon
lorry|kamyon
van|minibüs
helicopter|helikopter
wheel|tekerlek
ticket|bilet
passport|pasaport
luggage|bagaj / valiz
suitcase|bavul
passenger|yolcu
seat|koltuk
flight|uçuş
gate|kapı (havalimanı)
delay|gecikme / rötar
traffic|trafik
traffic light|trafik lambası
crosswalk|yaya geçidi
sidewalk|kaldırım
pavement|kaldırım
gas|benzin
petrol|benzin
gas station|benzin istasyonu
parking lot|otopark
nature|doğa
world|dünya
earth|dünya / toprak
sky|gökyüzü
sun|güneş
moon|ay
star|yıldız
cloud|bulut
rain|yağmur
snow|kar
wind|rüzgar
storm|fırtına
fog|sis
ice|buz
weather|hava durumu
temperature|sıcaklık
sunny|güneşli
rainy|yağmurlu
cloudy|bulutlu
windy|rüzgarlı
snowy|karlı
foggy|sisli
cool|serin
freezing|dondurucu
dry|kuru / kurulamak
wet|ıslak
tree|ağaç
flower|çiçek
grass|çimen / ot
leaf|yaprak
leaves|yapraklar
plant|bitki
forest|orman
wood|odun / koru
mountain|dağ
hill|tepe
valley|vadi
river|nehir / ırmak
lake|göl
sea|deniz
ocean|okyanus
beach|plaj / kumsal
sand|kum
island|ada
rock|kaya / taş
stone|taş
fire|ateş
air|hava
space|uzay / boşluk
animal|hayvan
pet|evcil hayvan
dog|köpek
puppy|köpek yavrusu
cat|kedi
kitten|kedi yavrusu
bird|kuş
horse|at
cow|inek
pig|domuz
sheep|koyun
goat|keçi
duck|ördek
rabbit|tavşan
mouse|fare
mice|fareler
rat|sıçan
lion|aslan
tiger|kaplan
bear|ayı
elephant|fil
monkey|maymun
giraffe|zürafa
zebra|zebra
snake|yılan
frog|kurbağa
turtle|kaplumbağa
crocodile|timsah
shark|köpekbalığı
whale|balina
dolphin|yunus
penguin|penguen
bee|arı
butterfly|kelebek
spider|örümcek
ant|karınca
fly|sinek / uçmak
mosquito|sivrisinek
wing|kanat
tail|kuyruk
fur|kürk
education|eğitim
class|sınıf / ders
classroom|sınıf
lesson|ders
course|kurs
subject|ders / konu
math|matematik
mathematics|matematik
science|fen bilimleri / bilim
history|tarih
geography|coğrafya
art|sanat / resim
music|müzik
english|İngilizce
sport|spor
book|kitap
notebook|defter
page|sayfa
paper|kağıt
pen|tükenmez kalem
pencil|kurşun kalem
eraser|silgi
rubber|silgi
ruler|cetvel
pencil case|kalem kutusu
board|tahta
blackboard|kara tahta
whiteboard|beyaz tahta
chalk|tebeşir
dictionary|sözlük
homework|ev ödevi
test|test / sınav
exam|sınav
question|soru
answer|cevap / cevap vermek
mistake|hata
correct|doğru
wrong|yanlış
grade|not / sınıf
mark|not / işaret
word|kelime
sentence|cümle
letter|harf / mektup
number|sayı / numara
story|hikaye
poem|şiir
fact|gerçek
idea|fikir
example|örnek
meaning|anlam
rule|kural
hobby|hobi
game|oyun
toy|oyuncak
ball|top
doll|oyuncak bebek
football|futbol
soccer|futbol
basketball|basketbol
tennis|tenis
volleyball|voleybol
swimming|yüzme
running|koşu
cycling|bisiklet sürme
team|takım
player|oyuncu
match|maç
race|yarış
win|kazanmak
lose|kaybetmek
draw|beraberlik / çizmek
goal|gol / hedef
point|puan / nokta
movie|film
film|film
song|şarkı
dance|dans / dans etmek
party|parti
concert|konser
instrument|enstrüman
guitar|gitar
piano|piyano
drum|davul
violin|keman
photo|fotoğraf
photograph|fotoğraf
drawing|çizim
newspaper|gazete
magazine|dergi
news|haberler
internet|internet
website|web sitesi
email|e-posta
message|mesaj
video|video
money|para
cash|nakit
coin|madeni para
banknote|banknot / kağıt para
credit card|kredi kartı
price|fiyat
cost|maliyet / fiyat / mal olmak
cheap|ucuz
expensive|pahalı
free|ücretsiz / özgür / boş
sale|indirim / satış
discount|indirim
receipt|fiş / makbuz
change|para üstü / değişim / değiştirmek
gift|hediye
shopping|alışveriş
list|liste
pair|çift
piece|parça / dilim
kilo|kilo
kilogram|kilogram
gram|gram
liter|litre
meter|metre
centimeter|santimetre
kilometer|kilometre
color|renk
colour|renk
red|kırmızı
blue|mavi
yellow|sarı
green|yeşil
purple|mor
pink|pembe
brown|kahverengi
black|siyah
white|beyaz
gray|gri
grey|gri
gold|altın rengi
silver|gümüş rengi
dark|koyu / karanlık
good|iyi
bad|kötü
great|harika
nice|hoş / güzel
fine|iyi / güzel
wonderful|harika / muhteşem
terrible|berbat / korkunç
awful|berbat
amazing|şaşırtıcı / harika
beautiful|güzel
pretty|sevimli / hoş
handsome|yakışıklı
cute|sevimli / tatlı
ugly|çirkin
big|büyük
large|geniş / büyük
huge|devasa
small|küçük
little|küçük / az
tiny|minicik
tall|uzun (boy)
short|kısa
long|uzun (mesafe/süre)
high|yüksek
low|alçak / düşük
wide|geniş
narrow|dar
thick|kalın
thin|ince / zayıf
fat|şişman
slim|ince / zayıf
heavy|ağır
fast|hızlı
quick|çabuk / hızlı
slow|yavaş
easy|kolay
simple|basit
difficult|zor
hard|zor / sert
soft|yumuşak
new|yeni
modern|modern
ancient|antik / çok eski
clean|temiz / temizlemek
dirty|kirli
full|dolu / tok
empty|boş / boşaltmak
open|açık / açmak
closed|kapalı
shut|kapalı / kapatmak
rich|zengin
poor|fakir
strong|güçlü
weak|zayıf / güçsüz
safe|güvenli
dangerous|tehlikeli
quiet|sessiz
loud|gürültülü / yüksek sesli
noisy|gürültülü
busy|meşgul / kalabalık
crowded|kalabalık
famous|ünlü
popular|popüler
important|önemli
special|özel
different|farklı
same|aynı
similar|benzer
real|gerçek
true|doğru / gerçek
false|yanlış / sahte
possible|mümkün
impossible|imkansız
ready|hazır
sure|emin / elbette
certain|kesin / emin
clear|açık / net
bright|parlak
sharp|keskin
round|yuvarlak
deep|derin
shallow|sığ
strange|garip / tuhaf
funny|komik
serious|ciddi
interesting|ilginç
boring|sıkıcı
exciting|heyecan verici
happy|mutlu
glad|memnun
sad|üzgün
unhappy|mutsuz
angry|kızgın / sinirli
mad|kızgın / deli
afraid|korkmuş
scared|korkmuş
tired|yorgun
sleepy|uykulu
bored|sıkılmış
excited|heyecanlı
surprised|şaşırmış
nervous|gergin / endişeli
worried|endişeli
calm|sakin
kind|kibar / nazik
polite|kibar
rude|kaba
friendly|arkadaş canlısı
helpful|yardımsever / faydalı
clever|zeki / akıllı
smart|akıllı / şık
intelligent|zeki
stupid|aptal
silly|saçma / aptalca
lazy|tembel
hardworking|çalışkan
brave|cesur
shy|utangaç
honest|dürüst
lucky|şanslı
unlucky|şanssız
alone|yalnız
lonely|yalnız (hisseden)
married|evli
single|bekar / tek
favorite|favori / en sevilen
favourite|favori / en sevilen
main|ana / temel
public|halka açık / kamu
private|özel / şahsi
local|yerel
international|uluslararası
able|yapabilen / muktedir
alive|canlı / hayatta
dead|ölü
asleep|uyuyan / uykuda
awake|uyanık
available|müsait / mevcut
careful|dikkatli
careless|dikkatsiz
comfortable|rahat
uncomfortable|rahatsız
common|yaygın / ortak
rare|nadir
complete|tam / eksiksiz
incorrect|yanlış
exact|tam / kesin
extra|ekstra / fazladan
final|son / nihai
general|genel
normal|normal
usual|olağan / her zamanki
unusual|olağandışı / sıra dışı
necessary|gerekli
perfect|mükemmel
pleasant|hoş / keyifli
positive|olumlu / pozitif
negative|olumsuz / negatif
natural|doğal
unhealthy|sağlıksız
useful|kullanışlı / faydalı
useless|kullanışsız / işe yaramaz
welcome|memnuniyetle karşılanan / hoş geldiniz
whole|bütün / tüm
be|olmak
have|sahip olmak
do|yapmak
make|yapmak / üretmek
go|gitmek
come|gelmek
see|görmek
look|bakmak
hear|duymak
listen|dinlemek
speak|konuşmak
talk|konuşmak / sohbet etmek
say|söylemek
tell|anlatmak / söylemek
ask|sormak / istemek
read|okumak
write|yazmak
spell|hecelemek / kodlamak
know|bilmek / tanımak
understand|anlamak
think|düşünmek
believe|inanmak
remember|hatırlamak
forget|unutmak
learn|öğrenmek
study|ders çalışmak
teach|öğretmek
want|istemek
need|ihtiyaç duymak
like|sevmek / hoşlanmak / gibi
love|sevmek / aşık olmak / aşk
hate|nefret etmek
prefer|tercih etmek
hope|umut etmek
wish|dilemek
try|denemek / çabalamak
use|kullanmak
find|bulmak
give|vermek
take|almak / götürmek
bring|getirmek
get|almak / elde etmek
buy|satın almak
sell|satmak
pay|ödemek
spend|harcamak (para/zaman)
save|biriktirmek / kurtarmak / kaydetmek
keep|saklamak / tutmak
hold|tutmak
carry|taşımak
put|koymak
set|ayarlamak / koymak
leave|ayrılmak / bırakmak
arrive|varmak / ulaşmak
reach|ulaşmak
stay|kalmak
live|yaşamak
die|ölmek
born|doğmak
grow|büyümek / yetiştirmek
start|başlamak
begin|başlamak
finish|bitirmek
end|sona ermek
stop|durmak / durdurmak
continue|devam etmek
wait|beklemek
hurry|acele etmek
move|hareket etmek / taşınmak
walk|yürümek
run|koşmak
jump|zıplamak
climb|tırmanmak
sit|oturmak
stand|ayakta durmak
lie|uzanmak / yalan söylemek / yalan
wake|uyanmak
eat|yemek yemek
bake|fırında pişirmek
cut|kesmek
wash|yıkamak
wear|giymek
close|kapatmak
turn|dönmek / çevirmek
push|itmek
pull|çekmek
break|kırmak
fix|tamir etmek
repair|tamir etmek
build|inşa etmek
paint|boyamak
play|oynamak / çalmak
sing|şarkı söylemek
swim|yüzmek
drive|araba sürmek
ride|binmek (bisiklet/at)
visit|ziyaret etmek
meet|tanışmak / buluşmak
call|aramak / çağırmak / arama
text|mesaj atmak
send|göndermek
receive|almak (mesaj/paket)
help|yardım etmek / yardım
show|göstermek
explain|açıklamak
mean|anlamına gelmek
agree|katılmak / anlaşmak
disagree|katılmamak
choose|seçmek
decide|karar vermek
plan|planlamak / plan
prepare|hazırlamak
invite|davet etmek
join|katılmak
follow|takip etmek
lead|liderlik etmek / yol göstermek
smile|gülümsemek
laugh|gülmek
cry|ağlamak
shout|bağırmak
scream|çığlık atmak
feel|hissetmek
touch|dokunmak
smell|koklamak / kokmak
taste|tatmak / tadı olmak
enjoy|keyif almak
relax|rahatlamak
work|çalışmak
practice|pratik yapmak
check|kontrol etmek
count|saymak
add|eklemek
share|paylaşmak
fill|doldurmak
drop|düşürmek
pick|seçmek / toplamak
throw|atmak / fırlatmak
catch|yakalamak
hit|vurmak
kick|tekmelemek
fight|kavga etmek / savaşmak
marry|evlenmek
kiss|öpmek
hug|sarılmak
wake up|uyanmak
get up|yataktan kalkmak
go out|dışarı çıkmak
come back|geri gelmek
go back|geri dönmek
sit down|oturmak
stand up|ayağa kalkmak
look at|bakmak
look for|aramak
look after|bakmak / ilgilenmek
turn on|açmak (ışık/cihaz)
turn off|kapatmak (ışık/cihaz)
put on|giymek
take off|çıkarmak (giysi) / havalanmak
pick up|yerden almak / birini arabayla almak
put down|yere bırakmak
give up|vazgeçmek / bırakmak
find out|öğrenmek / keşfetmek
grow up|büyümek / yetişmek
hang out|takılmak / vakit geçirmek
log in|giriş yapmak (hesaba)
log out|çıkış yapmak (hesaba)
fill in|doldurmak (form)
write down|not almak / yazmak
come in|içeri gelmek
hurry up|acele etmek
screen|ekran
keyboard|klavye
printer|yazıcı
tablet|tablet
app|uygulama
application|uygulama
file|dosya
folder|klasör
link|bağlantı / link
password|şifre / parola
username|kullanıcı adı
account|hesap
online|çevrimiçi
offline|çevrimdışı
wifi|kablosuz internet
download|indirmek
upload|yüklemek
click|tıklamak
delete|silmek
print|yazdırmak
search|aramak (internette)
type|yazmak (klavye ile)
battery|pil / batarya
power|güç / elektrik
volume|ses seviyesi
text message|kısa mesaj
post|gönderi / paylaşım
comment|yorum
blog|blog
channel|kanal
hello|merhaba
hi|selam
good morning|günaydın
good afternoon|tünaydın / iyi günler
good evening|iyi akşamlar
good night|iyi geceler
goodbye|hoşça kal
bye|güle güle
see you|görüşürüz
see you later|sonra görüşürüz
please|lütfen
thank you|teşekkür ederim
thanks|teşekkürler
you're welcome|rica ederim
excuse me|affedersiniz / bakar mısınız
sorry|özür dilerim / üzgünüm
I'm sorry|özür dilerim
no problem|sorun değil
of course|tabii ki
okay|tamam
all right|peki / tamam
nice to meet you|tanıştığımıza memnun oldum
how are you|nasılsın
I'm fine|iyiyim
bless you|çok yaşa
congratulations|tebrikler
good luck|iyi şanslar
happy birthday|doğum günün kutlu olsun
have a nice day|iyi günler dilerim
have fun|iyi eğlenceler
I don't know|bilmiyorum
I don't understand|anlamıyorum
help me|bana yardım et
wait a minute|bir dakika bekle
be careful|dikkatli ol
be quiet|sessiz ol
for example|örneğin
by the way|bu arada
thing|şey
stuff|eşya / şeyler
part|parça / bölüm
side|taraf / yan
top|üst / tepe
bottom|alt / dip
front|ön
middle|orta
center|merkez
edge|kenar
line|çizgi / sıra / hat
circle|daire / çember
shape|şekil
way|yol / yöntem
reason|sebep / neden
problem|sorun / problem
trouble|sorun / bela
information|bilgi
detail|detay / ayrıntı
truth|gerçek / doğru
secret|sır
dream|rüya / hayal
memory|anı / hafıza
life|hayat / yaşam
death|ölüm
peace|barış / huzur
war|savaş
danger|tehlike
luck|şans
fun|eğlence
joy|neşe
fear|korku
surprise|sürpriz
card|kart
postcard|kartpostal
stamp|pul
envelope|zarf
sign|işaret / tabela
notice|duyuru / ilan
ID card|kimlik kartı
license|ehliyet / lisans
form|form
title|başlık
group|grup
club|kulüp
member|üye
leader|lider
winner|kazanan
prize|ödül
competition|yarışma
event|etkinlik
festival|festival
celebration|kutlama
tradition|gelenek
culture|kültür
religion|din
god|tanrı
law|kanun / yasa
police|polis
crime|suç
thief|hırsız
prison|hapishane
I|ben
you|sen / siz
he|o (erkek)
she|o (kadın)
it|o (cansız/hayvan)
we|biz
they|onlar
me|beni / bana
him|onu / ona (erkek)
her|onu / ona / onun (kadın)
us|bizi / bize
them|onları / onlara
my|benim
your|senin / sizin
his|onun (erkek)
its|onun (cansız/hayvan)
our|bizim
their|onların
mine|benimki
yours|seninki / sizinki
hers|onunki
ours|bizimki
theirs|onlarınki
this|bu
that|şu / o
these|bunlar
those|şunlar / onlar
who|kim
what|ne
where|nerede / nereye
when|ne zaman / ...dığı zaman
why|neden / niçin
which|hangi
whose|kimin
how|nasıl
how many|kaç tane (sayılabilir)
how much|ne kadar (sayılamaz)
how old|kaç yaşında
how long|ne kadar süre
how often|ne sıklıkla
and|ve
but|ama / fakat
or|veya / ya da
so|bu yüzden / böylece
because|çünkü
if|eğer
while|...iken
before|önce
after|sonra
until|...e kadar
about|hakkında / yaklaşık
above|üzerinde
across|karşısında / bir uçtan diğerine
against|karşı
along|boyunca
among|arasında (ikiden fazla)
around|etrafında / civarında
at|...de / ...da (saat/yer)
beside|yanında
by|tarafından / ile (vasıta)
during|sırasında / boyunca
for|için / ...dır
from|...den / ...dan
into|içine
of|...nın / ...nin
off|uzakta / kapalı
out|dışarı
over|üzerinde / bitmiş
since|...den beri
through|içinden / vasıtasıyla
to|...e / ...a
toward|...e doğru
towards|...e doğru
with|ile / birlikte
without|...sız / ...siz
yes|evet
no|hayır / hiç
not|değil
maybe|belki
perhaps|belki
probably|muhtemelen
really|gerçekten
very|çok
too|çok (aşırı) / de, da
also|ayrıca / de, da
only|sadece / yalnızca
just|sadece / az önce
even|bile / hatta
almost|neredeyse
nearly|neredeyse
quite|oldukça
enough|yeterli / yeterince
more|daha fazla
most|en çok / çoğu
less|daha az
least|en az
many|birçok (sayılabilir)
much|çok (sayılamaz)
a lot of|birçok / çok
some|bazı / biraz
any|hiç / herhangi bir
few|az (sayılabilir)
all|hepsi / tüm
both|her ikisi
each|her bir
other|diğer
another|başka bir / diğer
such|böyle / öylesine
well|iyi / peki
badly|kötü bir şekilde
quickly|hızlıca
slowly|yavaşça
carefully|dikkatlice
easily|kolayca
happily|mutlu bir şekilde
sadly|üzgün bir şekilde
loudly|yüksek sesle
quietly|sessizce
together|birlikte / beraber
away|uzakta / uzağa
forward|ileri
abroad|yurt dışı
upstairs|üst kat / üst kata
downstairs|alt kat / alt kata
everybody|herkes
everyone|herkes
everything|her şey
somebody|birisi
someone|birisi
something|bir şey
anybody|herhangi biri / kimse
anyone|herhangi biri / kimse
anything|herhangi bir şey / hiçbir şey
nobody|hiç kimse
no one|hiç kimse
nothing|hiçbir şey
either|ikisi de / ya da
neither|hiçbiri
else|başka
anywhere|herhangi bir yerde
recently|son zamanlarda
suddenly|aniden
especially|özellikle
finally|sonunda
unfortunately|maalesef

`},
{id:"A2",text:`

career|kariyer
profession|meslek
occupation|meslek / uğraş
company|şirket / firma
business|iş / ticaret
industry|sanayi / endüstri
employee|çalışan / eleman
employer|işveren
colleague|iş arkadaşı
staff|personel / kadro
teamwork|takım çalışması
department|bölüm / departman
salary|maaş
wage|ücret (haftalık/saatlik)
income|gelir
experience|deneyim / tecrübe
skill|beceri / yetenek
qualification|nitelik / yeterlilik
interview|mülakat / röportaj
application form|başvuru formu
cv|özgeçmiş
resume|özgeçmiş
contract|sözleşme / kontrat
meeting|toplantı
presentation|sunum
project|proje
task|görev
duty|görev / sorumluluk
responsibility|sorumluluk
schedule|program / takvim
deadline|son teslim tarihi
overtime|fazla mesai
part-time|yarı zamanlı
full-time|tam zamanlı
unemployed|işsiz
retired|emekli
accountant|muhasebeci
architect|mimar
author|yazar
baker|fırıncı
barber|berber
builder|inşaat işçisi
businessman|iş adamı
businesswoman|iş kadını
carpenter|marangoz
cashier|kasiyer
coach|antrenör / koç
designer|tasarımcı
director|yönetici / yönetmen
electrician|elektrikçi
flight attendant|kabin memuru
guard|güvenlik görevlisi
guide|rehber
journalist|gazeteci
judge|hakim / yargıç
librarian|kütüphaneci
model|manken / model
musician|müzisyen
painter|ressam / boyacı
pharmacist|eczacı
plumber|tesisatçı
politician|siyasetçi
receptionist|resepsiyonist
reporter|muhabir
sailor|denizci
salesperson|satış elemanı
scientist|bilim insanı
security guard|güvenlik görevlisi
surfer|sörfçü
tailor|terzi
tour guide|tur rehberi
translator|çevirmen
vet|veteriner
emotion|duygu
feeling|his / duygu
mood|ruh hali
attitude|tutum / tavır
behavior|davranış
character|karakter
personality|kişilik
relationship|ilişki
friendship|arkadaşlık
marriage|evlilik
wedding|düğün
engagement|nişan
divorce|boşanma
couple|çift
partner|eş / ortak
relative|akraba
generation|nesil / kuşak
childhood|çocukluk
youth|gençlik
elderly|yaşlı
confident|özgüvenli
embarrassed|utanmış / mahcup
ashamed|utanmış
proud|gururlu
jealous|kıskanç
envious|kıskanç
anxious|endişeli / kaygılı
stressed|stresli
upset|üzgün / morali bozuk
disappointed|hayal kırıklığına uğramış
cheerful|neşeli
lively|canlı / hareketli
generous|cömert
selfish|bencil
greedy|açgözlü
patient|sabırlı
impatient|sabırsız
strict|katı / disiplinli
gentle|nazik / kibar
cruel|zalim / acımasız
reliable|güvenilir
dishonest|dürüst olmayan
sensible|mantıklı / aklı başında
sensitive|hassas / duygusal
creative|yaratıcı
curious|meraklı
ambitious|hırslı / tutkulu
determined|kararlı
independent|bağımsız
organized|düzenli / planlı
messy|dağınık
tidy|düzenli / derli toplu
neat|derli toplu / özenli
talkative|konuşkan
charming|çekici / büyüleyici
attractive|çekici
unpleasant|hoş olmayan
annoying|sinir bozucu
annoyed|sinirlenmiş / rahatsız olmuş
frightened|korkmuş
terrified|dehşete düşmüş
confused|kafası karışmış
grateful|minnettar
thankful|minnettar
satisfied|memnun / tatmin olmuş
dissatisfied|memnuniyetsiz
illness|hastalık
disease|hastalık
condition|durum / rahatsızlık
symptom|belirti
ache|ağrı / sızı
earache|kulak ağrısı
backache|sırt ağrısı
sore throat|boğaz ağrısı
injury|yaralanma
wound|yara
burn|yanık
bruise|morluk / çürük
broken|kırık
sprain|burkulma
allergy|alerji
allergic|alerjik
infection|enfeksiyon
virus|virüs
bacteria|bakteri
treatment|tedavi
cure|tedavi / çare
operation|ameliyat
surgery|ameliyat / cerrahi
injection|iğne / enjeksiyon
vaccine|aşı
prescription|reçete
capsule|kapsül
cream|krem
drops|damla (göz/kulak)
syrup|şurup
first aid|ilk yardım
emergency|acil durum
surgeon|cerrah
specialist|uzman doktor
appointment|randevu
check-up|genel kontrol
diet|diyet / beslenme düzeni
nutrition|beslenme
vitamin|vitamin
energy|enerji
fitness|formda olma
weight|kilo / ağırlık
height|boy / yükseklik
overweight|fazla kilolu
underweight|zayıf (kilo)
fit|formda / zinde
unfit|formsuz
stress|stres
breathe|nefes almak
breath|nefes
heartbeat|kalp atışı
muscle|kas
joint|eklem
ankle|ayak bileği
wrist|el bileği
waist|bel
hip|kalça
chin|çene
cheek|yanak
forehead|alın
eyebrow|kaş
eyelash|kirpik
beard|sakal
mustache|bıyık
tourism|turizm
tourist|turist
sightseeing|gezip görme
attraction|turistik yer / cazibe merkezi
monument|anıt
statue|heykel
castle|kale
palace|saray
cathedral|katedral
ruins|kalıntılar / harabeler
gallery|galeri
exhibition|sergi
souvenir|hediyelik eşya
brochure|broşür
guidebook|rehber kitap
itinerary|gezi planı
reservation|rezervasyon
booking|rezervasyon
accommodation|konaklama
hostel|pansiyon / hostel
campsite|kamp alanı
tent|çadır
reception|resepsiyon
check-in|giriş işlemi
check-out|çıkış işlemi
single room|tek kişilik oda
double room|çift kişilik oda
twin room|iki ayrı yataklı oda
guest house|konukevi
baggage|bagaj
hand luggage|el bagajı
backpacker|sırt çantalı gezgin
customs|gümrük
border|sınır
visa|vize
currency|para birimi
exchange rate|döviz kuru
departure|kalkış / ayrılış
arrival|varış
destination|varış noktası
route|rota / güzergah
direction|yön / tarif
distance|mesafe
mileage|mesafe (mil)
speed|hız
speed limit|hız sınırı
highway|otoban
motorway|otoban
lane|şerit
roundabout|dönel kavşak
crossroads|dörtyol ağzı / kavşak
junction|kavşak
pedestrian|yaya
zebra crossing|yaya geçidi
petrol station|benzin istasyonu
seatbelt|emniyet kemeri
helmet|kask
fare|yol ücreti
return ticket|gidiş-dönüş bileti
one-way ticket|tek yön bilet
platform|peron
timetable|tarife / saat çizelgesi
rail|ray / demiryolu
railway|demiryolu
carriage|vagon
tram|tramvay
yacht|yat
cruise|gemi turu
harbor|liman
sail|yelken açmak
land|inmek (uçak)
household|ev halkı
neighborhood|mahalle / semt
suburb|banliyö / dış mahalle
district|bölge / ilçe
rent|kira / kiralamak
landlord|ev sahibi (erkek)
landlady|ev sahibi (kadın)
tenant|kiracı
electricity|elektrik
heating|ısıtma
air conditioning|klima
central heating|merkezi ısıtma
tap|musluk
pipe|boru
drain|gider / kanalizasyon
plug|fiş
socket|priz
switch|elektrik düğmesi
light bulb|ampul
candle|mum
lighter|çakmak
torch|el feneri
flashlight|el feneri
cushion|kırlent / minder
duvet|yorgan
mattress|yatak şiltesi
chest of drawers|şifonyer
drawer|çekmece
cabinet|dolap
bookcase|kitaplık
stool|tabure
blinds|jaluzi / stor perde
shutter|panjur
wallpaper|duvar kağıdı
tile|fayans / kiremit
brick|tuğla
concrete|beton
metal|metal
plastic|plastik
iron|ütü / demir
ironing board|ütü masası
vacuum cleaner|elektrikli süpürge
broom|süpürge
mop|paspas
bucket|kova
dustpan|faraş
rag|bez
detergent|deterjan
bleach|çamaşır suyu
sponge|sünger
laundry|çamaşır
kettle|su ısıtıcısı
toaster|ekmek kızartma makinesi
blender|karıştırıcı / blender
mixer|mikser
freezer|derin dondurucu
frying pan|kızartma tavası
saucepan|tencere
pot|tencere / saksı
lid|kapak
tray|tepsi
jug|sürahi
mug|kupa bardak
saucer|fincan tabağı
tablecloth|masa örtüsü
apron|önlük
tin opener|konserve açacağı
corkscrew|tirbuşon
scissors|makas
needle|iğne
thread|iplik
glue|yapıştırıcı
tape|bant
string|ip / sicim
rope|halat
hammer|çekiç
screw|vida
screwdriver|tornavida
tool|alet
ladder|merdiven (taşınabilir)
fence|çit
lawn|çim alan
hedge|çit bitkisi
shed|kulübe / depo
attic|tavan arası
basement|bodrum
cellar|kiler / bodrum
ingredient|malzeme / içerik
recipe|yemek tarifi
portion|porsiyon
starter|başlangıç yemeği
main course|ana yemek
side dish|yan yemek / garnitür
beverage|içecek
vegetarian|vejetaryen
vegan|vegan
organic|organik
frozen|dondurulmuş
canned|konserve
tinned|konserve
raw|çiğ
ripe|olgun
rotten|çürük
stale|bayat
crispy|çıtır
crunchy|kıtır
creamy|kremalı
greasy|yağlı
oily|yağlı
juicy|sulu
tasteless|tatsız
mild|hafif (baharat/tat)
flavour|tat / lezzet / aroma
appetite|iştah
feast|ziyafet
picnic|piknik
barbecue|mangal
roast|fırında kızartmak
fry|yağda kızartmak
boil|haşlamak / kaynatmak
grill|ızgara yapmak
steam|buharda pişirmek
heat|ısıtmak
melt|erimek / eritmek
freeze|dondurmak / donmak
chop|doğramak
slice|dilimlemek
peel|kabuğunu soymak
grate|rendelemek
mix|karıştırmak
stir|karıştırmak (kaşıkla)
pour|dökmek (sıvı)
serve|servis etmek
lamb|kuzu eti
steak|biftek
turkey|hindi
salmon|somon
tuna|ton balığı
shrimp|karides
prawn|karides
crab|yengeç
seafood|deniz ürünleri
flour|un
yeast|maya
dough|hamur
pastry|hamur işi
pie|turta / börek
tart|tart
pancake|krep / pankek
cereal|kahvaltılık gevrek
oat|yulaf
yogurt|yoğurt
vinegar|sirke
mustard|hardal
ketchup|ketçap
mayonnaise|mayonez
sauce|sos
spice|baharat
herb|ot (baharatlık)
cinnamon|tarçın
ginger|zencefil
parsley|maydanoz
mint|nane
basil|fesleğen
spinach|ıspanak
cauliflower|karnabahar
eggplant|patlıcan
aubergine|patlıcan
zucchini|kabak
courgette|kabak
pumpkin|bal kabağı
celery|kereviz
radish|turp
beetroot|pancar
leek|pırasa
lentil|mercimek
chickpea|nohut
walnut|ceviz
almond|badem
hazelnut|fındık
peanut|yer fıstığı
raisin|kuru üzüm
fig|incir
plum|erik
apricot|kayısı
raspberry|ahududu
blueberry|yaban mersini
blackberry|böğürtlen
coconut|hindistan cevizi
avocado|avokado
mango|mango
kiwi|kivi
fashion|moda
style|tarz / stil
trend|akım / trend
brand|marka
label|etiket
design|tasarım
pattern|desen
striped|çizgili
spotted|benekli
checked|kareli / ekose
plain|düz / desensiz
pale|soluk / açık
tight|dar / sıkı
loose|bol / gevşek
baggy|bol
casual|günlük / rahat
formal|resmi
scruffy|pasaklı / dağınık
old-fashioned|eski moda
trendy|modaya uygun
blouse|bluz
cardigan|hırka
hoodie|kapüşonlu üst
sweatshirt|sweatshirt
vest|yelek / atlet
waistcoat|yelek
raincoat|yağmurluk
overcoat|palto
tracksuit|eşofman takımı
swimsuit|mayo
bikini|bikini
trunks|deniz şortu
tights|külotlu çorap
stockings|uzun çorap
slippers|terlik
high heels|yüksek topuklu ayakkabı
flat shoes|düz ayakkabı
laces|ayakkabı bağcığı
heel|topuk
sole|ayakkabı tabanı
sleeve|kol (giysi)
collar|yaka
cuff|manşet
hood|kapüşon
fabric|kumaş
material|malzeme / kumaş
silk|ipek
linen|keten
denim|kot kumaşı
nylon|naylon
polyester|polyester
bargain|kelepir / uygun fiyatlı alışveriş
offer|teklif / indirim
special offer|özel teklif
refund|para iadesi
exchange|değişim
warranty|garanti
guarantee|garanti
customer service|müşteri hizmetleri
changing room|deneme kabini
fitting room|deneme kabini
checkout|kasa
trolley|alışveriş arabası
queue|kuyruk / sıra
delivery|teslimat
postage|posta ücreti
package|paket
parcel|koli / paket
budget|bütçe
expense|masraf / gider
debt|borç
loan|kredi / borç
savings|birikim
tax|vergi
value|değer
worth|değer / değerinde
afford|maddi gücü yetmek
owe|borçlu olmak
borrow|ödünç almak
lend|ödünç vermek
waste|israf etmek
knowledge|bilgi
academic|akademik
degree|üniversite derecesi / diploma
diploma|diploma
certificate|sertifika
scholarship|burs
lecture|ders / konferans (üniversite)
lecturer|öğretim görevlisi
professor|profesör
principal|okul müdürü
headteacher|okul müdürü
pupil|öğrenci (ilk/ortaokul)
classmate|sınıf arkadaşı
graduate|mezun / mezun olmak
graduation|mezuniyet
semester|dönem / sömestr
term|dönem
recess|teneffüs
curriculum|müfredat
syllabus|ders programı
assignment|ödev / görev
essay|kompozisyon / makale
report|rapor
research|araştırma
experiment|deney
laboratory|laboratuvar
lab|laboratuvar
biology|biyoloji
chemistry|kimya
physics|fizik
literature|edebiyat
philosophy|felsefe
psychology|psikoloji
economics|ekonomi
politics|siyaset
technology|teknoloji
engineering|mühendislik
architecture|mimarlık
theory|teori / kuram
method|yöntem
result|sonuç
conclusion|sonuç / çıkarım
data|veri
chart|grafik / tablo
graph|grafik
diagram|diyagram / şema
percentage|yüzde
average|ortalama
total|toplam
amount|miktar
quantity|miktar
level|seviye
standard|standart
quality|kalite
progress|ilerleme
improvement|gelişme / iyileşme
success|başarı
failure|başarısızlık
effort|çaba
concentration|konsantrasyon
attention|dikkat
creativity|yaratıcılık
imagination|hayal gücü
talent|yetenek
ability|yetenek / kabiliyet
art gallery|sanat galerisi
sculpture|heykel
portrait|portre
landscape|manzara resmi
novel|roman
fiction|kurgu
non-fiction|kurgu dışı
biography|biyografi
poetry|şiir sanatı
poet|şair
plot|olay örgüsü
chapter|bölüm (kitap)
scene|sahne
stage|sahne (tiyatro)
performance|performans / gösteri
audience|seyirci / izleyici
applause|alkış
rehearsal|prova
band|müzik grubu
orchestra|orkestra
choir|koro
melody|melodi
rhythm|ritim
lyrics|şarkı sözleri
album|albüm
track|parça / şarkı
recording|kayıt
studio|stüdyo
comedy|komedi
drama|dram
horror|korku
thriller|gerilim
documentary|belgesel
animation|animasyon
cartoon|çizgi film
science fiction|bilim kurgu
producer|yapımcı
screenplay|senaryo
script|senaryo / metin
subtitles|altyazı
dubbed|dublajlı
device|cihaz
gadget|alet / cihaz
equipment|ekipman / donanım
machine|makine
engine|motor
robot|robot
software|yazılım
hardware|donanım
program|program
system|sistem
network|ağ
connection|bağlantı
signal|sinyal
database|veritabanı
storage|depolama
hard drive|sabit disk
usb|usb bellek
cable|kablo
wire|tel / kablo
wireless|kablosuz
bluetooth|bluetooth
headphones|kulaklık
earphones|kulak içi kulaklık
speaker|hoparlör
microphone|mikrofon
webcam|web kamerası
monitor|monitör / ekran
touchscreen|dokunmatik ekran
cursor|imleç
icon|simge
browser|tarayıcı
search engine|arama motoru
social media|sosyal medya
profile|profil
follower|takipçi
subscriber|abone
notification|bildirim
update|güncelleme
upgrade|yükseltme
install|kurmak / yüklemek
uninstall|kaldırmak (program)
crash|çökmek (sistem)
hacker|bilgisayar korsanı
security|güvenlik
privacy|gizlilik
settings|ayarlar
media|medya
press|basın
journalism|gazetecilik
article|makale / köşe yazısı
headline|manşet / başlık
column|sütun / köşe
editorial|başyazı
broadcast|yayın / yayınlamak
series|dizi
episode|bölüm (dizi)
commercial|reklam
advertisement|reklam
ad|reklam
publicity|tanıtım
environment|çevre
climate|iklim
climate change|iklim değişikliği
global warming|küresel ısınma
pollution|kirlilik
air pollution|hava kirliliği
water pollution|su kirliliği
rubbish|çöp
recycle|geri dönüştürmek
recycling|geri dönüşüm
solar energy|güneş enerjisi
wind power|rüzgar enerjisi
natural resources|doğal kaynaklar
protect|korumak
protection|koruma
destroy|yok etmek / yıkmak
damage|zarar / hasar
harm|zarar / zarar vermek
wildlife|vahşi yaşam
habitat|doğal yaşam alanı
species|tür (canlı)
endangered|nesli tükenmekte olan
extinct|nesli tükenmiş
jungle|balta girmemiş orman
rainforest|yağmur ormanı
desert|çöl
cave|mağara
cliff|uçurum / kayalık
waterfall|şelale
stream|dere / akarsu
canal|kanal (su)
pond|gölet
coast|kıyı / sahil
shore|kıyı
bay|koy
peninsula|yarımada
continent|kıta
region|bölge
area|alan / bölge
surface|yüzey
soil|toprak
mud|çamur
dust|toz
ash|kül
smoke|duman
flood|sel
earthquake|deprem
volcano|yanardağ
hurricane|kasırga
tornado|hortum
drought|kuraklık
thunder|gök gürültüsü
lightning|şimşek
breeze|esinti / meltem
hail|dolu
frost|don / kırağı
mist|pus / hafif sis
shade|gölge
shadow|gölge (nesne)
sunlight|güneş ışığı
sunrise|gün doğumu
sunset|gün batımı
horizon|ufuk
atmosphere|atmosfer
planet|gezegen
universe|evren
gravity|yerçekimi
bush|çalı
branch|dal
root|kök
seed|tohum
crop|ekin / mahsul
harvest|hasat
wild|vahşi
domestic|evcil / yerli
mammal|memeli
reptile|sürüngen
insect|böcek
worm|solucan
eagle|kartal
owl|baykuş
swan|kuğu
pigeon|güvercin
seagull|martı
parrot|papağan
deer|geyik
fox|tilki
wolf|kurt
camel|deve
donkey|eşek
bat|yarasa
squirrel|sincap
hedgehog|kirpi
seal|fok
octopus|ahtapot
jellyfish|denizanası
athlete|atlet / sporcu
champion|şampiyon
championship|şampiyona
tournament|turnuva
league|lig
medal|madalya
trophy|kupa / ödül
score|skor / puan
victory|zafer
defeat|yenilgi
opponent|rakip
referee|hakem
umpire|hakem (tenis/kriket)
spectator|seyirci
fan|taraftar / hayran
supporter|taraftar
pitch|saha (futbol/ragbi)
court|kort / saha (tenis/basketbol)
rink|buz pateni pisti
slope|kayak pisti
net|file / ağ
racket|raket
gloves|eldiven
training|antrenman
warm up|ısınmak
stretch|esneme hareketi yapmak
compete|yarışmak
beat|yenmek
pass|pas vermek
shoot|şut çekmek
dive|dalmak
ski|kayak yapmak
skiing|kayak
snowboarding|snowboard
ice skating|buz pateni
surfing|sörf
sailing|yelkencilik
fishing|balık tutma
camping|kamp yapma
hiking|doğa yürüyüşü
climbing|tırmanış
jogging|hafif tempolu koşu
yoga|yoga
martial arts|dövüş sanatları
boxing|boks
wrestling|güreş
gymnastics|jimnastik
athletics|atletizm
golf|golf
rugby|ragbi
baseball|beyzbol
hockey|hokey
table tennis|masa tenisi
badminton|badminton
chess|satranç
board game|kutu oyunu
card game|kart oyunu
puzzle|bulmaca / yapboz
crossword|çapraz bulmaca
leisure|boş zaman
free time|boş zaman
pastime|eğlence / hobi
entertainment|eğlence
amusement|eğlence
theme park|lunapark / tema parkı
circus|sirk
fair|fuar / panayır
parade|geçit töreni
society|toplum
community|topluluk / halk
population|nüfus
citizen|vatandaş
government|hükümet
state|devlet / eyalet
president|başkan / cumhurbaşkanı
prime minister|başbakan
minister|bakan
election|seçim
vote|oy / oy vermek
policy|politika / ilke
regulation|yönetmelik / kural
freedom|özgürlük
equality|eşitlik
justice|adalet
army|ordu
weapon|silah
gun|silah / tabanca
bomb|bomba
attack|saldırı / saldırmak
defend|savunmak
escape|kaçmak
rescue|kurtarmak
safety|güvenlik
criminal|suçlu
guilty|suçlu (mahkeme)
innocent|masum
suspect|şüpheli
witness|tanık
victim|kurban / mağdur
robbery|soygun
robber|soyguncu
theft|hırsızlık
burglary|ev/işyeri hırsızlığı
burglar|hırsız (eve giren)
shoplifting|mağaza hırsızlığı
murder|cinayet
murderer|katil
kidnapping|adam kaçırma
fraud|dolandırıcılık
vandalism|vandalizm / kamu malına zarar
steal|çalmak (eşya)
rob|soymak (yer/kişi)
arrest|tutuklamak
charge|suçlamak
investigate|soruşturmak / araştırmak
investigation|soruşturma
evidence|kanıt / delil
clue|ipucu
trial|duruşma / yargılama
jury|jüri
jail|hapishane
cell|hücre
punishment|ceza
illegal|yasa dışı
legal|yasal
accept|kabul etmek
achieve|başarmak / elde etmek
act|davranmak / rol yapmak
admire|hayran olmak
admit|itiraf etmek / kabul etmek
advise|tavsiye vermek
allow|izin vermek
announce|duyurmak / ilan etmek
apologize|özür dilemek
appear|görünmek / ortaya çıkmak
apply|başvurmak / uygulamak
appreciate|takdir etmek
argue|tartışmak
arrange|düzenlemek / ayarlamak
attach|eklemek / iliştirmek
attend|katılmak (ders/toplantı)
attract|çekmek / cezbetmek
avoid|kaçınmak
behave|davranmak
belong|ait olmak
bend|eğmek / bükmek
bite|ısırmak
blame|suçlamak
blow|üflemek / esmek
bother|rahatsız etmek / zahmet etmek
bury|gömmek
calculate|hesaplamak
cancel|iptal etmek
care|önemsemek / ilgilenmek
cause|sebep olmak
celebrate|kutlamak
chase|kovalamak
cheat|kopya çekmek / aldatmak
cheer|tezahürat yapmak / neşelendirmek
clap|alkışlamak
collect|toplamak / biriktirmek
combine|birleştirmek
communicate|iletişim kurmak
compare|karşılaştırmak
complain|şikayet etmek
concentrate|konsantre olmak
confirm|onaylamak
connect|bağlamak
consider|düşünmek / göz önünde bulundurmak
consist|oluşmak
contain|içermek
control|kontrol etmek
convince|ikna etmek
copy|kopyalamak
cover|örtmek / kaplamak
create|yaratmak / oluşturmak
cross|karşıdan karşıya geçmek
deal|ilgilenmek / başa çıkmak
decorate|süslemek / dekore etmek
decrease|azalmak / azaltmak
deliver|teslim etmek
demand|talep etmek
depend|bağlı olmak
describe|tanımlamak / tarif etmek
deserve|hak etmek
develop|geliştirmek / gelişmek
disappear|gözden kaybolmak
discover|keşfetmek
discuss|tartışmak / görüşmek
divide|bölmek
doubt|şüphe etmek
drag|sürüklemek
earn|para kazanmak
educate|eğitmek
encourage|cesaretlendirmek / teşvik etmek
entertain|eğlendirmek
examine|incelemek / muayene etmek
exist|var olmak
expect|ummak / beklemek
explore|keşfetmek / araştırmak
express|ifade etmek
fail|başarısız olmak / kalmak
fasten|bağlamak (kemer vb.)
feed|beslemek
fetch|gidip getirmek
float|su yüzeyinde durmak
fold|katlamak
forgive|affetmek
frighten|korkutmak
gain|kazanmak / elde etmek
gather|toplanmak / toplamak
guess|tahmin etmek
handle|ele almak / idare etmek
hang|asmak
happen|olmak / meydana gelmek
hide|saklamak / saklanmak
hire|kiralamak / işe almak
hunt|avlamak / avlanmak
identify|tanımlamak / teşhis etmek
ignore|görmezden gelmek
imagine|hayal etmek
improve|geliştirmek / iyileştirmek
include|dahil etmek
increase|artmak / artırmak
influence|etkilemek
inform|bilgilendirmek
injure|yaralamak
insist|ısrar etmek
inspect|denetlemek / incelemek
intend|niyet etmek
interrupt|sözünü kesmek
introduce|tanıştırmak / tanıtmak
invent|icat etmek
involve|içermek / dahil etmek
knock|kapıyı çalmak
let|izin vermek
limit|sınırlamak
load|yüklemek
locate|yerini belirlemek
manage|yönetmek / başarmak
matter|önemli olmak
measure|ölçmek
mend|onarmak / tamir etmek
mention|bahsetmek
mind|umursamak / sakıncası olmak
miss|özlemek / kaçırmak
obey|itaat etmek / uymak
obtain|elde etmek
occur|meydana gelmek
operate|çalıştırmak / ameliyat etmek
order|sipariş vermek / emretmek
organize|düzenlemek / organize etmek
own|sahip olmak
pack|paketlemek / bavul hazırlamak
perform|sahnelemek / uygulamak
permit|izin vermek
persuade|ikna etmek
pollute|kirletmek
praise|övmek
pray|dua etmek
predict|tahmin etmek
pretend|gibi davranmak / numara yapmak
prevent|önlemek / engel olmak
produce|üretmek
promise|söz vermek
pronounce|telaffuz etmek
prove|kanıtlamak
provide|sağlamak / temin etmek
publish|yayınlamak
punish|cezalandırmak
purchase|satın almak
quit|bırakmak / vazgeçmek
raise|kaldırmak / yetiştirmek / artırmak
realize|farkına varmak
recognize|tanımak
recommend|tavsiye etmek
record|kaydetmek
recover|iyileşmek
reduce|azaltmak
refer|bahsetmek / atıfta bulunmak
refuse|reddetmek
regret|pişman olmak
relate|ilişkilendirmek
release|serbest bırakmak / yayınlamak
rely|güvenmek / bel bağlamak
remain|kalmak / sürdürmek
remind|hatırlatmak
remove|kaldırmak / çıkarmak
replace|değiştirmek / yerini almak
reply|yanıtlamak
represent|temsil etmek
request|rica etmek / talep etmek
require|gerektirmek
reserve|ayırtmak / rezerve etmek
respect|saygı duymak
respond|yanıt vermek
retire|emekli olmak
return|geri dönmek / iade etmek
review|gözden geçirmek
rise|yükselmek / doğmak
risk|riske atmak
roll|yuvarlamak / yuvarlanmak
ruin|mahvetmek / bozmak
rush|acele etmek
satisfy|tatmin etmek
scare|korkutmak
seem|gibi görünmek
select|seçmek
separate|ayırmak
settle|yerleşmek / çözmek
sew|dikiş dikmek
shake|sallamak / titremek
shine|parlamak
shock|şok etmek
sigh|iç çekmek
slide|kaymak
slip|ayağı kaymak
sneeze|hapşırmak
solve|çözmek
sort|sınıflandırmak / ayırmak
sound|gibi gelmek (ses)
spill|dökmek / dökülmek
spoil|bozmak / şımartmak
spread|yaymak / yayılmak
squeeze|sıkmak
stare|dik dik bakmak
stick|yapıştırmak / saplanmak
succeed|başarılı olmak
suffer|acı çekmek
suggest|önermek
supply|sağlamak / tedarik etmek
support|desteklemek
suppose|sanmak / varsaymak
survive|hayatta kalmak
swallow|yutmak
swear|yemin etmek / küfretmek
sweep|süpürmek
swing|sallanmak
tear|yırtmak
tend|eğiliminde olmak
terrify|dehşete düşürmek
thank|teşekkür etmek
threaten|tehdit etmek
translate|çevirmek
trap|tuzağa düşürmek
treat|davranmak / tedavi etmek
trust|güvenmek
twist|bükmek
underline|altını çizmek
unlock|kilidini açmak
unpack|bavul boşaltmak
warn|uyarmak
wave|el sallamak
weigh|tartmak / ağırlığında olmak
whisper|fısıldamak
whistle|ıslık çalmak
wonder|merak etmek
worry|endişelenmek
wrap|sarmak / paketlemek
yawn|esnemek
yell|bağırmak
absent|yok / devamsız
accurate|doğru / hatasız
active|aktif / hareketli
actual|gerçek / asıl
additional|ek / ilave
advanced|ileri düzey
appropriate|uygun
artificial|yapay
automatic|otomatik
aware|farkında
basic|temel
blank|boş (kağıt/alan)
blind|kör
boiling|kaynar / çok sıcak
bold|cesur / kalın (yazı)
brief|kısa / öz
brilliant|harika / zeki
broad|geniş
capable|yetenekli / muktedir
central|merkezi
chemical|kimyasal
clumsy|sakar
complex|karmaşık
complicated|karmaşık
conscious|bilinçli
constant|sürekli / sabit
convenient|uygun / elverişli
crazy|çılgın / deli
cultural|kültürel
curly|kıvırcık
current|mevcut / güncel
daily|günlük
damp|nemli
deaf|sağır
dear|sevgili / pahalı
definite|kesin
delighted|çok memnun
depressed|bunalımlı / depresif
digital|dijital
direct|doğrudan / direkt
disabled|engelli
distant|uzak
double|çift / iki katı
dramatic|dramatik
dull|sıkıcı / donuk
dusty|tozlu
eager|istekli / hevesli
eastern|doğu (yön)
economic|ekonomik
educational|eğitici
effective|etkili
efficient|verimli
electric|elektrikli
electrical|elektriksel
electronic|elektronik
emotional|duygusal
energetic|enerjik
enormous|devasa / muazzam
entertaining|eğlenceli
entire|tüm / bütün
environmental|çevresel
equal|eşit
essential|gerekli / temel
excellent|mükemmel
exhausted|bitkin / çok yorgun
existing|mevcut / var olan
experienced|deneyimli
extreme|aşırı / uç
familiar|tanıdık / aşina
fantastic|harika / fantastik
fashionable|modaya uygun
female|dişi / kadın
fierce|şiddetli / azılı
financial|mali / finansal
firm|sert / sıkı / kararlı
fixed|sabit
flexible|esnek
fluent|akıcı (dil)
following|takip eden / sonraki
fond|düşkün / seven
foreign|yabancı
former|önceki / eski
fortunate|şanslı
frequent|sık
furious|çok öfkeli
genuine|gerçek / hakiki
giant|devasa
global|küresel
gorgeous|muhteşem / göz alıcı
harmful|zararlı
harmless|zararsız
hidden|gizli
historical|tarihi
hollow|içi boş
hopeful|umutlu
hopeless|umutsuz
horrible|korkunç
human|insani
humid|nemli
humorous|mizahi / komik
icy|buzlu
ideal|ideal
immediate|acil / anında
impressive|etkileyici
indoor|kapalı mekan
industrial|endüstriyel
informal|resmi olmayan
initial|ilk / başlangıç
injured|yaralı
inner|iç
interested|ilgili
internal|iç / dahili
junior|genç / alt rütbeli
keen|istekli / hevesli
known|bilinen
latest|en son
leading|önde gelen
likely|muhtemel / olası
limited|sınırlı
liquid|sıvı
lost|kayıp
lovely|hoş / sevimli
loyal|sadık
magic|sihirli
magical|büyülü
major|büyük / önemli
male|erkek
marvelous|harika
massive|çok büyük
maximum|maksimum
medical|tıbbi
mental|zihinsel
minimum|minimum
minor|küçük / önemsiz
missing|kayıp / eksik
mixed|karışık
monthly|aylık
moral|ahlaki
muddy|çamurlu
nasty|kötü / pis
national|ulusal / milli
native|yerli / anadil
northern|kuzey
obvious|açık / bariz
odd|garip / tek (sayı)
official|resmi
ordinary|sıradan
original|orijinal / özgün
outdoor|açık hava
outer|dış
overall|genel
painful|ağrılı / acı verici
particular|belirli / özel
peaceful|huzurlu / barışçıl
permanent|kalıcı
personal|kişisel
physical|fiziksel
pleased|memnun
plenty|bol / çok
pointed|sivri
poisonous|zehirli
political|siyasi
powerful|güçlü
practical|pratik
precious|değerli / kıymetli
pregnant|hamile
prepared|hazırlıklı
previous|önceki
primary|birincil / temel
probable|muhtemel
professional|profesyonel
proper|uygun / doğru
pure|saf
puzzled|şaşırmış
qualified|nitelikli
rapid|hızlı
realistic|gerçekçi
reasonable|makul
recent|son zamanlardaki
regular|düzenli
related|ilgili / akraba
relaxed|rahatlamış
religious|dini
remaining|kalan
remarkable|dikkat çekici
remote|uzak
responsible|sorumlu
ridiculous|saçma / gülünç
risky|riskli
romantic|romantik
rough|kaba / engebeli / dalgalı
royal|kraliyet
rural|kırsal
scary|korkutucu
scientific|bilimsel
second-hand|ikinci el
secure|güvenli
senior|kıdemli / yaşça büyük
several|birkaç
severe|şiddetli
shiny|parlak
shocked|şok olmuş
silent|sessiz
skilled|yetenekli / becerikli
slight|hafif / az
smooth|pürüzsüz
social|sosyal
solid|katı / sağlam
sore|ağrıyan / acıyan
southern|güney
spare|yedek / boş
specific|belirli / özel
spectacular|muhteşem
steep|dik
sticky|yapışkan
stiff|sert / katı
successful|başarılı
sudden|ani
suitable|uygun
super|süper
surprising|şaşırtıcı
technical|teknik
temporary|geçici
tiring|yorucu
tough|zor / sert
traditional|geleneksel
trained|eğitimli
tropical|tropikal
typical|tipik
unable|yapamayan
unfair|adaletsiz
unique|eşsiz / benzersiz
united|birleşik
unknown|bilinmeyen
unlikely|olası olmayan
unnecessary|gereksiz
upper|üst
urban|kentsel / şehir
urgent|acil
used|kullanılmış
valuable|değerli
various|çeşitli
violent|şiddetli
visible|görünür
wealthy|zengin
weekly|haftalık
weird|tuhaf
well-known|iyi bilinen / ünlü
western|batı
willing|istekli
wise|bilge / akıllı
wooden|ahşap
worse|daha kötü
worst|en kötü
although|...e rağmen
though|gerçi / ...e rağmen
however|ancak / bununla birlikte
therefore|bu yüzden / dolayısıyla
moreover|dahası / ayrıca
furthermore|ayrıca / bunun yanı sıra
besides|bunun yanında / ayrıca
otherwise|aksi takdirde
unless|...medikçe / ...madıkça
whether|...ip ...mediği
as soon as|...er ...mez
as long as|...dığı sürece
even though|...e rağmen
in order to|...mek için
so that|...sın diye
instead of|...nın yerine
because of|...den dolayı
due to|...den dolayı
according to|...e göre
apart from|...den başka / hariç
except|hariç
except for|hariç
including|dahil
such as|gibi / örneğin
for instance|örneğin
in fact|aslında
actually|aslında
basically|temelde / aslına bakarsanız
personally|şahsen
honestly|dürüst olmak gerekirse
luckily|neyse ki / şans eseri
fortunately|neyse ki
obviously|açıkçası / belli ki
clearly|açıkça
definitely|kesinlikle
certainly|kesinlikle
absolutely|kesinlikle / tamamen
completely|tamamen
totally|tamamen
entirely|tamamen
partly|kısmen
mainly|çoğunlukla / esasen
mostly|çoğunlukla
generally|genellikle
normally|normalde
frequently|sık sık
occasionally|ara sıra
seldom|nadiren
hardly|neredeyse hiç
hardly ever|neredeyse hiç
barely|zar zor / neredeyse hiç
gradually|giderek / yavaş yavaş
immediately|hemen / derhal
instantly|anında
eventually|sonunda / nihayetinde
meanwhile|bu arada / o esnada
afterwards|sonradan / daha sonra
previously|önceden
lately|son zamanlarda
currently|şu anda / halihazırda
nowadays|bugünlerde
once upon a time|bir zamanlar
at first|ilk başta
at last|sonunda
at least|en azından
at most|en fazla
at once|hemen / aynı anda
by accident|kazara / yanlışlıkla
by chance|tesadüfen
by mistake|yanlışlıkla
on purpose|bilerek / kasten
in a hurry|aceleyle
in advance|önceden / peşin
in general|genel olarak
in particular|özellikle
in time|zamanında (yetişmek)
on time|tam vaktinde
out of order|bozuk / çalışmıyor
up to date|güncel
so far|şimdiye kadar
all of a sudden|aniden
each other|birbirini
one another|birbirini
on my own|kendi başıma
by myself|kendi başıma
make sure|emin olmak
take care|kendine iyi bakmak / dikkat etmek
take part in|katılmak (etkinlik)
take place|meydana gelmek / gerçekleşmek
look forward to|dört gözle beklemek
get used to|alışmak
used to|eskiden yapardı
be able to|...ebilmek
have to|zorunda olmak
ought to|...meli / ...malı
`},
{id:"B1",text:`
concept|kavram
notion|kavram / fikir
principle|ilke / prensip
aspect|yön / açı
factor|etken / faktör
element|unsur / öge
feature|özellik
characteristic|karakteristik / özellik
phenomenon|olgu / fenomen
circumstance|durum / koşul
situation|durum
context|bağlam
perspective|bakış açısı
viewpoint|bakış açısı
opinion|görüş / fikir
belief|inanç
assumption|varsayım
hypothesis|hipotez
certainty|kesinlik
possibility|olasılık
probability|ihtimal
likelihood|olasılık
opportunity|fırsat
chance|şans / fırsat
alternative|alternatif / seçenek
option|seçenek
choice|seçim
preference|tercih
priority|öncelik
purpose|amaç
aim|hedef / amaç
objective|hedef / amaç
intention|niyet
ambition|tutku / hırs
motivation|motivasyon
inspiration|ilham
impact|etki / darbe
consequence|sonuç / netice
outcome|sonuç
effect|etki
origin|köken / kaynak
source|kaynak
basis|temel / esas
foundation|temel / kuruluş
structure|yapı
framework|çerçeve
process|süreç
procedure|prosedür / işlem
phase|aşama / evre
step|adım
tendency|eğilim
habit|alışkanlık
routine|rutin
custom|gelenek / adet
norm|norm / kural
ethics|etik / ahlak
criteria|kriterler / ölçütler
boundary|sınır
restriction|kısıtlama
obstacle|engel
barrier|bariyer / engel
challenge|zorluk / meydan okuma
crisis|kriz
disaster|felaket
catastrophe|büyük felaket
conflict|çatışma / anlaşmazlık
dispute|anlaşmazlık / tartışma
argument|tartışma / argüman
debate|münazara / tartışma
issue|mesele / sorun
topic|konu
theme|tema
advantage|avantaj
disadvantage|dezavantaj
benefit|fayda / yarar
drawback|dezavantaj / sakınca
threat|tehdit
hazard|tehlike
stability|istikrar / denge
balance|denge
harmony|uyum
chaos|kaos
variety|çeşitlilik
diversity|çeşitlilik
similarity|benzerlik
difference|fark
contrast|zıtlık / tezat
comparison|karşılaştırma
relation|ilişki
correlation|ilişki / korelasyon
proportion|oran
ratio|oran
rate|oran / hız
extent|boyut / derece
scale|ölçek
scope|kapsam
range|yelpaze / aralık
capacity|kapasite
mass|kütle
pressure|basınç / baskı
force|güç / kuvvet
strength|güç / dayanıklılık
weakness|zayıflık
flaw|kusur / hata
defect|kusur / bozukluk
error|hata
fault|kusur / kabahat
excuse|bahane / mazeret
apology|özür
forgiveness|affetme
sympathy|sempati / anlayış
empathy|empati
compassion|şefkat / merhamet
kindness|nezaket / iyilik
generosity|cömertlik
honesty|dürüstlük
loyalty|sadakat
confidence|özgüven / güven
courage|cesaret
bravery|cesaret
patience|sabır
wisdom|bilgelik
intelligence|zeka
humor|mizah
wit|nükte / kıvrak zeka
charm|cazibe
grace|zarafet
dignity|onur / haysiyet
pride|gurur
shame|utanç
guilt|suçluluk duygusu
sorrow|keder / üzüntü
grief|yas / derin üzüntü
misery|sefalet / mutsuzluk
despair|umutsuzluk
anxiety|kaygı / endişe
panic|panik
terror|dehşet
anger|öfke
fury|hiddet / öfke
rage|öfke nöbeti
hatred|nefret
jealousy|kıskançlık
envy|imrenme / kıskançlık
greed|açgözlülük
selfishness|bencillik
cruelty|zalimlik
violence|şiddet
aggression|saldırganlık
hostility|düşmanlık
prejudice|önyargı
discrimination|ayrımcılık
racism|ırkçılık
poverty|yoksulluk
wealth|zenginlik / servet
luxury|lüks
comfort|konfor / rahatlık
convenience|kolaylık / uygunluk
pleasure|zevk / memnuniyet
delight|sevinç / haz
satisfaction|memnuniyet
fulfillment|tatmin / yerine getirme
achievement|başarı
triumph|zafer
glory|şan / zafer
fame|şöhret
reputation|itibar / ün
status|statü / durum
prestige|prestij / saygınlık
authority|otorite / yetki
discipline|disiplin
obedience|itaat
rebellion|isyan
revolution|devrim
reform|reform / yenilik
development|gelişme
evolution|evrim
growth|büyüme
expansion|genişleme
decline|düşüş / gerileme
collapse|çöküş
survival|hayatta kalma
existence|varoluş
reality|gerçeklik
illusion|yanılsama / illüzyon
fantasy|fantezi / hayal
mystery|gizem
miracle|mucize
fate|kader
destiny|kader / alın yazısı
fortune|talih / servet
coincidence|tesadüf
economy|ekonomi
finance|finans
commerce|ticaret
trade|ticaret
stock market|borsa
investment|yatırım
investor|yatırımcı
fund|fon / sermaye
asset|varlık / mal varlığı
property|mülk / mal
estate|emlak / mülk
profit|kar
loss|zarar
revenue|gelir / hasılat
turnover|ciro
margin|kar marjı
expenditure|harcama
overhead|genel giderler
inflation|enflasyon
recession|ekonomik durgunluk
depression|ekonomik buhran
unemployment|işsizlik
bankruptcy|iflas
credit|kredi
mortgage|konut kredisi
interest|faiz / ilgi
taxation|vergilendirme
tariff|gümrük vergisi
subsidy|sübvansiyon / devlet desteği
grant|hibe / burs
insurance|sigorta
claim|talep / tazminat talebi
compensation|tazminat
pension|emekli maaşı
allowance|harçlık / ödenek
bonus|ikramiye / prim
commission|komisyon
fee|ücret / harç
invoice|fatura
statement|hesap özeti
deposit|depozito / mevduat
withdrawal|para çekme
transfer|havale / transfer
transaction|işlem (mali)
negotiation|müzakere / pazarlık
agreement|anlaşma
partnership|ortaklık
merger|şirket birleşmesi
corporation|büyük şirket / kurum
enterprise|girişim / işletme
agency|ajans / acente
headquarters|genel merkez
subsidiary|yan kuruluş
competitor|rakip (ticari)
rival|rakip
monopoly|tekel
consumer|tüketici
client|müşteri / müvekkil
supplier|tedarikçi
manufacturer|üretici
retailer|perakendeci
wholesaler|toptancı
distributor|dağıtıcı
importer|ithalatçı
exporter|ihracatçı
import|ithalat / ithal etmek
export|ihracat / ihraç etmek
goods|mallar / eşyalar
merchandise|ticari mal
commodity|emtia / ticari ürün
product|ürün
item|ürün / kalem
stock|stok
inventory|envanter / stok
warehouse|depo
shortage|kıtlık / eksiklik
surplus|fazlalık
output|çıktı / üretim miktarı
production|üretim
manufacturing|imalat
construction|inşaat
agriculture|tarım
mining|madencilik
logistics|lojistik
marketing|pazarlama
advertising|reklamcılık
promotion|tanıtım / terfi
campaign|kampanya
strategy|strateji
management|yönetim
administration|idare / yönetim
leadership|liderlik
executive|yönetici
chairman|yönetim kurulu başkanı
founder|kurucu
owner|sahip
shareholder|hissedar
supervisor|denetmen / şef
assistant|asistan
trainee|stajyer
intern|stajyer
apprentice|çırak
applicant|başvuru sahibi
candidate|aday
recruit|işe almak / yeni eleman
recruitment|işe alım
vacancy|açık pozisyon
resignation|istifa
dismissal|işten çıkarma
redundancy|işten çıkarma (kadro fazlalığı)
strike|grev
union|sendika
welfare|refah / sosyal yardım
academy|akademi
institute|enstitü
institution|kurum
faculty|fakülte
campus|kampüs
seminar|seminer
workshop|atölye çalışması
conference|konferans
symposium|sempozyum
thesis|tez
dissertation|doktora tezi
journal|akademik dergi
publication|yayın
edition|baskı / basım
index|dizin / indeks
bibliography|kaynakça
reference|referans / kaynak
quote|alıntı
summary|özet
abstract|özet (makale)
outline|taslak / ana hat
draft|taslak
version|sürüm / versiyon
analysis|analiz
synthesis|sentez
evaluation|değerlendirme
assessment|değerlendirme / ölçme
observation|gözlem
measurement|ölçüm
calculation|hesaplama
equation|denklem
formula|formül
variable|değişken
statistics|istatistik
sample|örneklem / numune
survey|anket / araştırma
poll|anket / kamuoyu yoklaması
questionnaire|anket formu
finding|bulgu
discovery|keşif
invention|icat
innovation|yenilik / inovasyon
breakthrough|çığır açan buluş
patent|patent
apparatus|cihaz / alet
microscope|mikroskop
telescope|teleskop
lens|mercek
laser|lazer
radiation|radyasyon
atom|atom
molecule|molekül
gene|gen
genetics|genetik
dna|dna
organism|organizma
tissue|doku
organ|organ
skeleton|iskelet
nerve|sinir
substance|madde
compound|bileşik
acid|asit
oxygen|oksijen
hydrogen|hidrojen
carbon|karbon
nitrogen|azot
steel|çelik
copper|bakır
aluminum|alüminyum
uranium|uranyum
fuel|yakıt
diesel|dizel
coal|kömür
nuclear|nükleer
solar|güneş (enerjisi)
voltage|voltaj
circuit|devre
magnet|mıknatıs
friction|sürtünme
velocity|hız
acceleration|ivme
momentum|momentum
orbit|yörünge
satellite|uydu
galaxy|galaksi
asteroid|asteroit
comet|kuyruklu yıldız
eclipse|tutulma
astronomy|astronomi
astrology|astroloji
geology|jeoloji
archaeology|arkeoloji
anthropology|antropoloji
sociology|sosyoloji
linguistics|dilbilim
algorithm|algoritma
artificial intelligence|yapay zeka
automation|otomasyon
cyber|siber
virtual|sanal
simulation|simülasyon
encryption|şifreleme
server|sunucu
bandwidth|bant genişliği
resolution|çözünürlük
pixel|piksel
processor|işlemci
chip|çip / yonga
sensor|sensör
radar|radar
regime|rejim
parliament|parlamento / meclis
congress|kongre
senate|senato
council|konsey / belediye meclisi
municipality|belediye
embassy|büyükelçilik
consulate|konsolosluk
diplomat|diplomat
ambassador|büyükelçi
statesman|devlet adamı
voter|seçmen
electorate|seçmen kitlesi
ballot|oy pusulası
referendum|referandum
constitution|anayasa
legislation|yasama / kanunlar
amendment|yasa değişikliği
decree|kararname
treaty|antlaşma
pact|pakt / antlaşma
alliance|ittifak
ally|müttefik
coalition|koalisyon
opposition|muhalefet
majority|çoğunluk
minority|azınlık
democracy|demokrasi
republic|cumhuriyet
monarchy|monarşi
dictatorship|diktatörlük
communism|komünizm
socialism|sosyalizm
capitalism|kapitalizm
liberalism|liberalizm
conservatism|muhafazakarlık
nationalism|milliyetçilik
patriotism|vatanseverlik
ideology|ideoloji
propaganda|propaganda
censorship|sansür
protest|protesto
demonstration|gösteri / yürüyüş
riot|ayaklanma / isyan
boycott|boykot
petition|dilekçe
human rights|insan hakları
civil rights|medeni haklar
liberty|özgürlük
independence|bağımsızlık
sovereignty|egemenlik
injustice|adaletsizlik
fairness|hakkaniyet
supreme court|yüksek mahkeme
tribunal|mahkeme / kurul
magistrate|sulh hakimi
prosecutor|savcı
attorney|avukat
solicitor|avukat
barrister|dava vekili
defendant|sanık / davalı
plaintiff|davacı
testimony|tanıklık / ifade
verdict|karar (jüri)
appeal|temyiz / itiraz
bail|kefalet
parole|şartlı tahliye
custody|gözaltı / velayet
detention|gözaltı / tutukluluk
offense|suç / kabahat
felony|ağır suç
misdemeanor|hafif suç
arson|kundakçılık
assault|saldırı / darp
blackmail|şantaj
bribery|rüşvet
corruption|yolsuzluk
espionage|casusluk
forgery|sahtecilik
harassment|taciz
hijacking|uçak/araç kaçırma
manslaughter|taksirle adam öldürme
smuggling|kaçakçılık
terrorism|terörizm
treason|vatana ihanet
trespass|izinsiz girme
charity|hayır kurumu / yardım
donation|bağış
volunteer|gönüllü
immigrant|göçmen
emigrant|göçmen (giden)
refugee|mülteci
asylum|sığınma
integration|entegrasyon / uyum
multicultural|çok kültürlü
heritage|miras (kültürel)
ancestor|ata
descendant|torun / soyundan gelen
tribe|kabile
clan|klan / boy
aristocracy|aristokrasi
middle class|orta sınıf
working class|işçi sınıfı
elite|seçkin kesim
civilian|sivil
resident|sakin / ikamet eden
inhabitant|yerli / oturan
anatomy|anatomi
physiology|fizyoloji
liver|karaciğer
kidney|böbrek
lung|akciğer
intestine|bağırsak
bladder|mesane
pancreas|pankreas
gallbladder|safra kesesi
artery|atardamar
vein|toplardamar
vessel|damar
pulse|nabız
blood pressure|tansiyon
cholesterol|kolesterol
metabolism|metabolizma
immune system|bağışıklık sistemi
hormone|hormon
enzyme|enzim
protein|protein
carbohydrate|karbonhidrat
fiber|lif
mineral|mineral
calorie|kalori
obesity|obezite
malnutrition|yetersiz beslenme
dehydration|susuz kalma
fatigue|yorgunluk / bitkinlik
exhaustion|tükenmişlik
insomnia|uykusuzluk
migraine|migren
nausea|mide bulantısı
dizziness|baş dönmesi
faint|bayılmak
inflammation|iltihap
swelling|şişlik
rash|döküntü / kızarıklık
itch|kaşıntı
cramp|kramp
spasm|spazm
fracture|kırık (kemik)
dislocation|çıkık
concussion|beyin sarsıntısı
hemorrhage|kanama
bleeding|kanama
stroke|felç / inme
heart attack|kalp krizi
cancer|kanser
tumor|tümör
diabetes|diyabet / şeker hastalığı
asthma|astım
pneumonia|zatürre
bronchitis|bronşit
tuberculosis|verem / tüberküloz
hepatitis|hepatit
epidemic|salgın
pandemic|küresel salgın
plague|veba / salgın
diagnosis|teşhis / tanı
prognosis|hastalık seyri tahmini
therapy|terapi
rehabilitation|rehabilitasyon
physiotherapy|fizyoterapi
chemotherapy|kemoterapi
anesthesia|anestezi
transplant|organ nakli
donor|bağışçı / donör
ward|hastane koğuşu
intensive care|yoğun bakım
operating theater|ameliyathane
stretcher|sedye
wheelchair|tekerlekli sandalye
crutch|koltuk değneği
cast|alçı
stitch|dikiş (tıbbi)
scar|yara izi
ointment|merhem
antibiotic|antibiyotik
painkiller|ağrı kesici
sedative|sakinleştirici
dosage|dozaj
side effect|yan etki
addiction|bağımlılık
substance abuse|madde bağımlılığı
psychiatry|psikiyatri
therapist|terapist
psychologist|psikolog
psychiatrist|psikiyatrist
counseling|psikolojik danışmanlık
mental health|ruh sağlığı
disorder|bozukluk / rahatsızlık
phobia|fobi
trauma|travma
hallucination|halüsinasyon
delusion|sanrı
paranoia|paranoya
schizophrenia|şizofreni
bipolar|bipolar
autism|otizm
dementia|bunama
alzheimer's|alzheimer
consciousness|bilinç
subconscious|bilinçaltı
unconscious|bilinçsiz / baygın
instinct|içgüdü
intuition|sezgi
perception|algı
cognition|biliş
amnesia|hafıza kaybı
intellect|akıl / zeka
temperament|mizaç / huy
trait|kişilik özelliği
ego|ego / benlik
self-esteem|özsaygı
self-confidence|özgüven
inferiority|aşağılık kompleksi
superiority|üstünlük
ecology|ekoloji
ecosystem|ekosistem
biodiversity|biyoçeşitlilik
conservation|doğa koruma
sustainability|sürdürülebilirlik
sustainable|sürdürülebilir
renewable|yenilenebilir
fossil fuel|fosil yakıt
emission|emisyon / salınım
greenhouse effect|sera etkisi
ozone layer|ozon tabakası
deforestation|ormansızlaşma
erosion|erozyon
desertification|çölleşme
contamination|kirlenme
toxic|zehirli
hazardous|tehlikeli (atık)
sewage|kanalizasyon atığı
landfill|çöp sahası
compost|gübre (organik)
fertilizer|gübre
pesticide|tarım ilacı
herbicide|ot ilacı
irrigation|sulama
cultivation|ekim / yetiştirme
livestock|çiftlik hayvanları
cattle|sığır
poultry|kümes hayvanları
dairy|mandıra / süt ürünleri
orchard|meyve bahçesi
vineyard|üzüm bağı
meadow|çayır
pasture|otlak / mera
plateau|yayla / plato
canyon|kanyon
gorge|geçit / boğaz
glacier|buzul
iceberg|buzdağı
reef|resif
lagoon|lagün
estuary|haliç
delta|delta
tributary|nehir kolu
geyser|gayzer
crater|krater
lava|lav
magma|magma
tremor|yer sarsıntısı
aftershock|artçı sarsıntı
tsunami|tsunami
avalanche|çığ
landslide|toprak kayması
famine|kıtlık
starvation|açlık
monsoon|muson
typhoon|tayfun
cyclone|kasırga
gale|fırtına / şiddetli rüzgar
drizzle|çiseleme
downpour|sağanak
sleet|sulu kar
blizzard|kar fırtınası
heatwave|sıcak hava dalgası
cold snap|ani soğuk hava
humidity|nem
barometer|barometre
forecast|hava tahmini
vegetation|bitki örtüsü
flora|bitki varlığı
fauna|hayvan varlığı
breed|cins / ırk
predator|yırtıcı hayvan
prey|av
scavenger|leşçil hayvan
herbivore|otçul
carnivore|etçil
omnivore|hepçil
hibernation|kış uykusu
migration|göç
extinction|nesli tükenme
poaching|kaçak avlanma
ivory|fildişi
timber|kereste
bark|ağaç kabuğu
trunk|gövde (ağaç)
twig|ince dal
bud|tomurcuk
blossom|çiçek (ağaç)
petal|taç yaprak
stem|sap
thorn|diken
weed|yabani ot
moss|yosun
fern|eğrelti otu
fungus|mantar (bilimsel)
algae|su yosunu
civilization|medeniyet / uygarlık
folklore|halk bilimi / folklor
myth|mit / efsane
mythology|mitoloji
legend|efsane
fable|fabl / masal
fairy tale|peri masalı
prose|düzyazı
verse|dize / nazım
stanza|kıta (şiir)
rhyme|kafiye
metaphor|metafor / eğretileme
simile|benzetme
symbolism|sembolizm
irony|ironi
satire|hiciv
sarcasm|alaycılık
parody|parodi
tragedy|trajedi
genre|tür (sanat/edebiyat)
masterpiece|şaheser / başyapıt
classic|klasik
contemporary|çağdaş
impressionism|empresyonizm
surrealism|sürrealizm
renaissance|rönesans
baroque|barok
gothic|gotik
facade|cephe (bina)
arch|kemer
dome|kubbe
tower|kule
spire|çan kulesi
vault|tonoz
curator|küratör
exhibit|sergilenen eser
auction|müzayede / açık artırma
canvas|tuval
easel|şövale
palette|palet
brushstroke|fırça darbesi
sketch|eskiz / taslak
carving|oyma
pottery|çömlekçilik
ceramics|seramik
mosaic|mozaik
fresco|fresk
mural|duvar resmi
symphony|senfoni
concerto|konçerto
opera|opera
ballet|bale
composer|besteci
conductor|orkestra şefi
soloist|solist
acoustic|akustik
tempo|tempo
tone|ton
chorus|koro / nakarat
repertoire|repertuvar
audition|seçme (oyuncu/müzisyen)
role|rol
rehearse|prova yapmak
premiere|prömiyer / ilk gösterim
box office|gişe
blockbuster|gişe rekorları kıran film
sequel|devam filmi
trilogy|üçleme
critic|eleştirmen
criticism|eleştiri
tabloid|magazin gazetesi
broadsheet|ciddi gazete
columnist|köşe yazarı
correspondent|muhabir (dış)
editor|editör
publisher|yayıncı
circulation|tiraj
bias|önyargı / taraflılık
objectivity|tarafsızlık / nesnellik
abandon|terk etmek
abolish|yürürlükten kaldırmak
absorb|emmek / soğurmak
abuse|kötüye kullanmak / istismar etmek
accelerate|hızlanmak / hızlandırmak
accommodate|barındırmak / yer sağlamak
accompany|eşlik etmek
accomplish|başarmak / tamamlamak
accumulate|biriktirmek / birikmek
accuse|suçlamak
acknowledge|kabul etmek / onaylamak
acquire|edinmek / kazanmak
adapt|uyum sağlamak / uyarlamak
adjust|ayarlamak / alışmak
administer|yönetmek / uygulamak
adopt|evlat edinmek / benimsemek
advance|ilerlemek / geliştirmek
advocate|savunmak / desteklemek
affect|etkilemek
aid|yardım etmek
alert|uyarmak
allege|iddia etmek
allocate|tahsis etmek / paylaştırmak
alter|değiştirmek
amend|düzeltmek / değiştirmek (yasa)
amuse|eğlendirmek
analyze|analiz etmek
anticipate|beklemek / öngörmek
appoint|atamak
approach|yaklaşmak
approve|onaylamak
arise|ortaya çıkmak
arouse|uyandırmak (duygu/ilgi)
assemble|toplamak / monte etmek
assert|iddia etmek / ileri sürmek
assess|değerlendirmek
assign|atamak / görevlendirmek
assist|yardım etmek
associate|ilişkilendirmek
assume|varsaymak
assure|garanti vermek / temin etmek
astonish|şaşırtmak
attain|ulaşmak / elde etmek
attempt|girişimde bulunmak / denemek
attribute|dayandırmak / atfetmek
authorize|yetki vermek
ban|yasaklamak
bet|bahse girmek
betray|ihanet etmek
bind|bağlamak
boast|övünmek
boost|artırmak / yükseltmek
bounce|zıplamak / sektirmek
bribe|rüşvet vermek
burst|patlamak
capture|yakalamak / ele geçirmek
carve|oymak
cease|durdurmak / sona ermek
characterize|nitelendirmek
cherish|değer vermek / el üstünde tutmak
circulate|dolaşmak / yaymak
cite|alıntı yapmak / belirtmek
clarify|açıklığa kavuşturmak
classify|sınıflandırmak
cling|tutunmak / yapışmak
coincide|aynı zamana denk gelmek
collaborate|işbirliği yapmak
collide|çarpışmak
command|emretmek / komuta etmek
commence|başlamak
commit|işlemek (suç) / adamak
compel|zorlamak / mecbur etmek
compensate|telafi etmek
compile|derlemek
complement|tamamlamak
comply|uymak / itaat etmek
compose|bestelemek / oluşturmak
comprehend|kavramak / anlamak
comprise|içermek / kapsamak
compromise|uzlaşmak / taviz vermek
conceal|gizlemek / saklamak
concede|kabul etmek (yenilgiyi vb.)
conceive|tasarlamak / kavramak
concern|ilgilendirmek / endişelendirmek
conclude|sonuçlandırmak
condemn|kınamak / mahkum etmek
conduct|yönetmek / yürütmek
confer|danışmak / vermek (unvan)
confess|itiraf etmek
confine|sınırlamak / hapsetmek
confront|yüzleşmek / karşı karşıya gelmek
congratulate|tebrik etmek
conquer|fethetmek
consent|razı olmak / onay vermek
conserve|korumak / tasarruf etmek
constitute|oluşturmak
constrain|kısıtlamak / zorlamak
construct|inşa etmek
consult|danışmak
consume|tüketmek
contemplate|düşünmek / tasarlamak
contend|ileri sürmek / mücadele etmek
contest|itiraz etmek / yarışmak
contradict|çelişmek / yalanlamak
contribute|katkıda bulunmak
convert|dönüştürmek
convey|iletmek / taşımak
cooperate|işbirliği yapmak
coordinate|koordine etmek
cope|başa çıkmak
correspond|yazışmak / tekabül etmek
corrupt|yozlaştırmak
counsel|tavsiye vermek
counter|karşı koymak
crack|çatlamak / kırmak
crawl|emeklemek / sürünmek
criticize|eleştirmek
crush|ezmek
cultivate|yetiştirmek / işlemek
curb|frenlemek / kısıtlamak
dare|cesaret etmek
deceive|aldatmak / kandırmak
declare|ilan etmek / beyan etmek
dedicate|adamak
deduce|sonuç çıkarmak
deem|saymak / addetmek
defer|ertelemek
define|tanımlamak
defy|karşı gelmek
delegate|yetki devretmek
demonstrate|göstermek / kanıtlamak
denounce|kınamak / ihbar etmek
deny|inkar etmek
depart|ayrılmak / yola çıkmak
depict|tasvir etmek
deplete|tüketmek / azaltmak
deploy|konuşlandırmak
depress|bunalıma sokmak
deprive|mahrum bırakmak
derive|türemek / elde etmek
designate|belirlemek / atamak
despise|hor görmek / nefret etmek
detach|ayırmak / sökmek
detain|alıkoymak / gözaltına almak
detect|tespit etmek
deteriorate|kötüleşmek / bozulmak
determine|belirlemek / karar vermek
devastate|harap etmek / yıkmak
devise|tasarlamak / icat etmek
devote|adamak
diagnose|teşhis koymak
dictate|dikte etmek / emretmek
differ|farklı olmak
differentiate|ayırt etmek
diminish|azalmak / küçülmek
dip|batırmak / daldırmak
discard|atmak / elden çıkarmak
discharge|taburcu etmek / boşaltmak
disclose|açığa çıkarmak
discourage|cesaretini kırmak
disguise|kılık değiştirmek / gizlemek
dismiss|kovmak / reddetmek
display|sergilemek / göstermek
dispose|elden çıkarmak
disrupt|bozmak / aksatmak
dissolve|erimek / feshetmek
distinguish|ayırt etmek
distort|çarpıtmak
distract|dikkatini dağıtmak
distribute|dağıtmak
disturb|rahatsız etmek
divert|yönünü değiştirmek
dominate|hükmetmek / baskın olmak
donate|bağışlamak
doom|mahkum etmek
drift|sürüklenmek
drown|boğulmak
duplicate|kopyalamak / çoğaltmak
dwell|ikamet etmek / üzerinde durmak
echo|yankılanmak
edit|düzenlemek
elaborate|detaylandırmak
elect|seçmek (oyla)
elevate|yükseltmek
eliminate|elemek / ortadan kaldırmak
embarrass|utandırmak
embody|somutlaştırmak / bünyesinde toplamak
embrace|kucaklamak / benimsemek
emerge|ortaya çıkmak
emit|yaymak / salmak
emphasize|vurgulamak
employ|işe almak / kullanmak
empower|yetkilendirmek / güçlendirmek
enable|olanak sağlamak
enclose|çevrelemek / ilişik olarak koymak
encounter|karşılaşmak
endanger|tehlikeye atmak
endorse|onaylamak / desteklemek
endure|katlanmak / dayanmak
enforce|uygulamak (yasa)
engage|meşgul olmak / nişanlanmak
enhance|artırmak / geliştirmek
enlighten|aydınlatmak
enlist|askere almak / kaydetmek
enrich|zenginleştirmek
enroll|kayıt olmak
ensure|garantiye almak / sağlamak
entail|gerektirmek / yol açmak
entitle|hak vermek / adlandırmak
equip|donatmak
eradicate|kökünü kazımak
erase|silmek
erect|dikmek / inşa etmek
erode|aşındırmak
erupt|patlamak (yanardağ vb.)
establish|kurmak / tesis etmek
estimate|tahmin etmek
evacuate|tahliye etmek
evaluate|değerlendirmek
evoke|uyandırmak / çağrıştırmak
evolve|evrimleşmek / gelişmek
exaggerate|abartmak
exceed|aşmak
excel|üstün olmak
exclude|hariç tutmak
execute|idam etmek / uygulamak
exert|sarffetmek (çaba/güç)
exhaust|tüketmek / yormak
expand|genişlemek / büyütmek
expel|kovmak / ihraç etmek
exploit|sömürmek / faydalanmak
expose|maruz bırakmak / açığa çıkarmak
extend|uzatmak / genişletmek
extract|çıkarmak / özünü almak
fabricate|uydurmak / imal etmek
facilitate|kolaylaştırmak
fade|solmak / gözden kaybolmak
fake|sahtesini yapmak
falter|sendelemek / bocalamak
fascinate|büyülemek
favor|tercih etmek / kayırmak
flee|kaçmak
fling|fırlatmak
flourish|gelişmek / serpilmek
fluctuate|dalgalanmak
forbid|yasaklamak
formulate|formüle etmek
foster|teşvik etmek / büyütmek
found|kurmak
frame|çerçevelemek
fulfill|yerine getirmek
function|işlev görmek
furnish|mobilya döşemek
gaze|dikkatle bakmak
generate|üretmek / oluşturmak
govern|yönetmek
grab|kapmak / yakalamak
grasp|kavramak
greet|selamlamak
grieve|yas tutmak
halt|durdurmak / durmak
handicap|engellemek
harass|taciz etmek
hasten|acele etmek
haunt|musallat olmak
heal|iyileşmek / iyileştirmek
hesitate|tereddüt etmek
highlight|vurgulamak
hinder|engellemek
hint|ima etmek
honor|onurlandırmak
host|ev sahipliği yapmak
humiliate|küçük düşürmek
hypothesize|hipotez kurmak
illustrate|örneklemek / resimlemek
imitate|taklit etmek
immerse|daldırmak
implement|uygulamak
imply|ima etmek
impose|dayatmak / uygulamak
impress|etkilemek
imprison|hapsetmek
incline|eğilimli olmak
incorporate|bünyesine katmak
incur|maruz kalmak (masraf/zarar)
indicate|göstermek / işaret etmek
induce|ikna etmek / neden olmak
indulge|şımartmak / kendini kaptırmak
infect|bulaştırmak
infer|sonuç çıkarmak
inflict|vermek (acı/zarar)
inherit|miras almak
inhibit|engellemek / bastırmak
initiate|başlatmak
inject|enjekte etmek
innovate|yenilik yapmak
inquire|sormak / soruşturmak
insert|yerleştirmek / sokmak
inspire|ilham vermek
instruct|talimat vermek / eğitmek
insult|hakaret etmek
integrate|bütünleştirmek
interact|etkileşime girmek
interfere|müdahale etmek / karışmak
interpret|yorumlamak / tercüme etmek
intervene|müdahale etmek
intimidate|gözünü korkutmak
invade|istila etmek
invest|yatırım yapmak
irritate|sinirlendirmek / tahriş etmek
isolate|izole etmek / ayırmak
justify|haklı çıkarmak
kidnap|kaçırmak (insan)
launch|başlatmak / fırlatmak
leak|sızdırmak / sızmak
lean|eğilmek / yaslanmak
leap|sıçramak
legislate|yasa çıkarmak
liberate|özgürleştirmek
linger|oyalanmak
lobby|lobi yapmak
lure|cezbetmek / tuzağa çekmek
maintain|sürdürmek / bakım yapmak
manipulate|yönlendirmek / manipüle etmek
manufacture|üretmek / imal etmek
master|ustalaşmak
maximize|en üst düzeye çıkarmak
mediate|arabuluculuk yapmak
meditate|meditasyon yapmak
merge|birleşmek
migrate|göç etmek
mimic|taklit etmek
minimize|en aza indirmek
mislead|yanıltmak
modify|değiştirmek / uyarlamak
motivate|motive etmek
mourn|yas tutmak
multiply|çarpmak / çoğalmak
neglect|ihmal etmek
negotiate|müzakere etmek
nominate|aday göstermek
notify|bildirmek
nourish|beslemek
object|itiraz etmek
oblige|mecbur etmek
observe|gözlemlemek
obsess|takıntı yapmak
occupy|işgal etmek / meşgul etmek
offend|gücendirmek / kırmak
omit|çıkarmak / atlamak
oppose|karşı çıkmak
oppress|baskı yapmak / zulmetmek
opt|seçmek / tercih etmek
optimize|optimize etmek
originate|kaynaklanmak
outnumber|sayıca üstün olmak
overcome|üstesinden gelmek
overflow|taşmak
overlook|gözden kaçırmak / manzarasına bakmak
overtake|sollamak / geçmek
overthrow|devirmek
overwhelm|bunaltmak / ezmek
participate|katılmak
penetrate|nüfuz etmek / içine işlemek
perceive|algılamak
persist|ısrar etmek / devam etmek
pioneer|öncülük etmek
plead|yalvarmak / savunma yapmak
pledge|söz vermek / rehin bırakmak
plunge|dalmak / düşmek
portray|tasvir etmek / canlandırmak
pose|poz vermek / oluşturmak (tehlike)
possess|sahip olmak
postpone|ertelemek
precede|önce gelmek
prescribe|reçete yazmak
preserve|korumak / muhafaza etmek
preside|başkanlık etmek
prevail|galip gelmek / yaygın olmak
proclaim|ilan etmek
prohibit|yasaklamak
promote|terfi ettirmek / teşvik etmek
prompt|teşvik etmek / yol açmak
propose|önermek / evlenme teklif etmek
prosecute|dava açmak
prosper|zenginleşmek / gelişmek
provoke|kışkırtmak
pursue|takip etmek / peşinden gitmek
qualify|nitelik kazanmak / hak kazanmak
rank|sıralamak / derece almak
reassure|güvence vermek / rahatlatmak
rebel|isyan etmek
recall|hatırlamak / geri çağırmak
recede|geri çekilmek
reckon|sanmak / hesaplamak
reconcile|uzlaştırmak / barıştırmak
reconstruct|yeniden inşa etmek
refrain|kaçınmak / kendini tutmak
refute|çürütmek (iddia)
regain|geri kazanmak
register|kaydetmek / kayıt olmak
regulate|düzenlemek
reinforce|güçlendirmek / takviye etmek
reject|reddetmek
relieve|rahatlatmak / hafifletmek
relocate|taşınmak / yerini değiştirmek
remedy|çare bulmak
render|kılmak / sunmak
renew|yenilemek
renounce|vazgeçmek / reddetmek
reproduce|üremek / kopyalamak
resemble|benzemek
resent|içerlemek / kızmak
reside|ikamet etmek
resign|istifa etmek
resist|direnmek
resolve|çözmek / karar vermek
restore|restore etmek / geri vermek
restrain|kısıtlamak / dizginlemek
restrict|sınırlamak
retain|elinde tutmak / muhafaza etmek
retreat|geri çekilmek
reveal|açığa çıkarmak / göstermek
revenge|intikam almak
reverse|tersine çevirmek
revise|gözden geçirmek / düzeltmek
revive|canlandırmak
revolt|isyan etmek
reward|ödüllendirmek
rid|kurtarmak
rot|çürümek
rotate|dönmek / döndürmek
sacrifice|feda etmek
safeguard|korumak
sanction|onaylamak / yaptırım uygulamak
scan|taramak
scatter|saçmak / dağıtmak
scold|azarlamak
scratch|kaşımak / çizmek
seek|aramak
seize|el koymak / yakalamak
shatter|paramparça etmek
shelter|barındırmak / sığınmak
shield|korumak / siper olmak
shift|değiştirmek / kaydırmak
shrink|küçülmek / çekmek (kumaş)
shrug|omuz silkmek
signify|anlamına gelmek / belirtmek
simulate|taklit etmek / simüle etmek
slaughter|katletmek / kesmek (hayvan)
smash|parçalamak
smuggle|kaçakçılık yapmak
soak|ıslatmak / emmek
soar|yükselmek / süzülmek
specify|belirtmek
speculate|tahmin yürütmek / spekülasyon yapmak
sponsor|sponsor olmak
stabilize|dengelemek / sabitlemek
stimulate|uyarmak / teşvik etmek
strengthen|güçlendirmek
strive|çabalamak
struggle|mücadele etmek
submit|teslim etmek / boyun eğmek
subscribe|abone olmak
substitute|yerine koymak
subtract|çıkarmak (matematik)
summarize|özetlemek
supervise|denetlemek
suppress|bastırmak
surpass|aşmak / geçmek
surrender|teslim olmak
surround|çevrelemek
suspend|askıya almak
sustain|sürdürmek
symbolize|sembolize etmek
tackle|ele almak / mücadele etmek
tempt|ayartmak / cezbetmek
terminate|sona erdirmek
testify|tanıklık etmek
thrive|gelişmek / serpilmek
tolerate|hoş görmek / katlanmak
torture|işkence etmek
trace|izini sürmek
transform|dönüştürmek
transmit|iletmek
trigger|tetiklemek
undergo|geçirmek (ameliyat/değişim)
undermine|baltalamak / zayıflatmak
undertake|üstlenmek
unify|birleştirmek
unite|birleşmek
urge|dürtmek / ısrarla tavsiye etmek
utilize|faydalanmak / kullanmak
utter|söylemek / telaffuz etmek
validate|doğrulamak / onaylamak
vanish|gözden kaybolmak
vary|çeşitlilik göstermek / değişmek
venture|göze almak / girişmek
verify|doğrulamak
violate|ihlal etmek
visualize|gözünde canlandırmak
weaken|zayıflatmak
worship|tapmak / ibadet etmek
yield|ürün vermek / teslim olmak
abnormal|anormal
absolute|mutlak / kesin
absurd|saçma
abundant|bol
accessible|erişilebilir
accidental|kazara olan
acclaimed|beğenilen
accountable|sorumlu
acute|şiddetli / akut
adequate|yeterli
adjacent|bitişik
administrative|idari
adolescent|ergen
adverse|olumsuz / ters
aesthetic|estetik
affectionate|şefkatli
affordable|uygun fiyatlı
aggressive|saldırgan
agile|çevik
alien|yabancı / uzaylı
ambiguous|belirsiz / muğlak
ample|bol / geniş
analytical|analitik
anonymous|isimsiz / anonim
apparent|görünür / aşikar
applicable|uygulanabilir
arbitrary|keyfi
arrogant|kibirli
assertive|iddialı / girişken
astonishing|şaşırtıcı
authentic|özgün / hakiki
autonomous|özerk / bağımsız
awkward|garip / sakar / mahcup
beneficial|faydalı
biased|önyargılı / taraflı
bizarre|tuhaf / acayip
bleak|kasvetli / iç karartıcı
blunt|kör (bıçak) / dobra
boastful|övüngen
brisk|canlı / hızlı
brutal|acımasız / vahşi
candid|samimi / açık sözlü
cautious|tedbirli / dikkatli
chronic|kronik
civic|kentsel / yurttaşlıkla ilgili
civil|sivil / medeni
classical|klasik
coherent|tutarlı
collective|ortak / kolektif
colonial|sömürge
comparable|karşılaştırılabilir
compatible|uyumlu
competent|yetkin / ehil
competitive|rekabetçi
comprehensive|kapsamlı
compulsory|zorunlu
concealed|gizli
confidential|gizli (belge/bilgi)
consecutive|ardışık
conservative|muhafazakar
considerable|önemli ölçüde
considerate|düşünceli / nazik
consistent|tutarlı
conspicuous|göze çarpan
constitutional|anayasal
constructive|yapıcı
content|memnun / razı
contradictory|çelişkili
controversial|tartışmalı
conventional|geleneksel / alışılmış
cooperative|işbirlikçi
cosmic|kozmik
costly|masraflı / pahalı
courageous|cesur
courteous|kibar / nazik
credible|güvenilir / inanılır
critical|eleştirel / kritik
crucial|çok önemli / kritik
crude|ham / kaba
cumulative|kümülatif / birikimli
cynical|alaycı / kuşkucu
daring|cüretkar
deadly|ölümcül
decent|düzgün / terbiyeli
decisive|kararlı / belirleyici
dedicated|adanmış
defective|kusurlu / bozuk
defensive|savunmacı
deficient|eksik / yetersiz
deliberate|kasıtlı / planlı
delicate|narin / hassas
democratic|demokratik
dense|yoğun
dependent|bağımlı
desirable|arzulanan
desperate|umutsuz / çaresiz
destructive|yıkıcı
detailed|detaylı
devastating|yıkıcı / kahredici
devious|sinsi / dolambaçlı
devoted|sadık / kendini adamış
diplomatic|diplomatik
discreet|sağduyulu / ketum
distinct|farklı / belirgin
distinctive|ayırt edici
distinguished|seçkin
diverse|çeşitli
divine|ilahi
dominant|baskın
doubtful|şüpheli
drastic|şiddetli / köklü
dreadful|korkunç / berbat
dreary|kasvetli / sıkıcı
dubious|şüpheli / kuşkulu
durable|dayanıklı
dynamic|dinamik
eccentric|eksantrik / tuhaf
ecological|ekolojik
eligible|uygun / seçilebilir
eloquent|güzel konuşan
eminent|seçkin / ünlü
empirical|deneysel
endless|sonsuz
enthusiastic|hevesli / coşkulu
equivalent|eşdeğer
erratic|düzensiz / tutarsız
eternal|sonsuz / ebedi
ethical|etik / ahlaki
ethnic|etnik
evident|açık / aşikar
evil|kötü / şeytani
exceptional|istisnai / olağanüstü
excessive|aşırı
exclusive|özel / seçkin
exotic|egzotik
explicit|açık / net
explosive|patlayıcı
extensive|geniş kapsamlı
external|dış / harici
extravagant|savurgan / abartılı
faithful|sadık
fatal|ölümcül
favorable|olumlu / elverişli
feasible|uygulanabilir / mümkün
federal|federal
fertile|verimli / doğurgan
fragile|kırılgan
frank|açık sözlü / samimi
frantic|çılgınca / telaşlı
fraudulent|sahtekar / hileli
fundamental|temel
futile|boşuna / nafile
genetic|genetik
gigantic|devasa
gloomy|kasvetli / karamsar
graceful|zarif
gradual|kademeli / yavaş
grand|büyük / görkemli
grave|ciddi / vahim
grim|acımasız / kasvetli
gross|brüt / kaba
handy|kullanışlı / el altında
harsh|sert / acımasız
hasty|aceleci
hectic|telaşlı / yoğun
hereditary|kalıtsal
heroic|kahramanca
hostile|düşmanca
humble|alçakgönüllü
identical|özdeş / tıpatıp aynı
idle|boş / tembel
ignorant|cahil / bilgisiz
immense|muazzam / çok büyük
imminent|eli kulağında / yakın
immoral|ahlaksız
immortal|ölümsüz
immune|bağışık
impartial|tarafsız
imperative|zorunlu / acil
implicit|üstü kapalı / örtük
inadequate|yetersiz
inappropriate|uygunsuz
incapable|yeteneksiz / aciz
incentive|teşvik edici
inclined|eğilimli
inclusive|kapsayıcı
incompatible|uyumsuz
incompetent|yetersiz / beceriksiz
incredible|inanılmaz
indifferent|ilgisiz / kayıtsız
indigenous|yerli
indispensable|vazgeçilmez
inevitable|kaçınılmaz
infinite|sonsuz
influential|etkili / nüfuzlu
inherent|doğasında var olan
innate|doğuştan gelen
innovative|yenilikçi
insane|deli / çılgın
insecure|güvensiz
insignificant|önemsiz
instinctive|içgüdüsel
intact|sağlam / dokunulmamış
integral|tamamlayıcı / ayrılmaz
intense|yoğun
intensive|yoğun
interactive|etkileşimli
intermediate|orta düzey
intimate|samimi / içten
intricate|karmaşık / girift
intriguing|ilgi çekici
invalid|geçersiz
invaluable|paha biçilmez
invisible|görünmez
ironic|ironik
irrelevant|ilgisiz / alakasız
irresponsible|sorumsuz
isolated|izole / yalnız
judicial|adli / yargısal
juvenile|genç / çocuksu
legitimate|meşru / yasal
lenient|hoşgörülü / yumuşak
liable|sorumlu / yükümlü
liberal|liberal / özgürlükçü
literal|kelimesi kelimesine
logical|mantıklı
lucrative|karlı / kazançlı
magnificent|muhteşem
malicious|kötü niyetli
mandatory|zorunlu
manual|elle yapılan / manuel
marginal|marjinal / önemsiz
marine|denizle ilgili
mature|olgun
meaningful|anlamlı
mechanical|mekanik
medieval|ortaçağ
memorable|unutulmaz
merciless|acımasız
mere|sadece / basit
metropolitan|metropol / büyükşehir
mighty|güçlü / kudretli
militant|militan / savaşçı
military|askeri
miserable|sefil / çok mutsuz
misleading|yanıltıcı
moderate|ılımlı / orta
modest|alçakgönüllü / mütevazı
monetary|parasal
monotonous|monoton / tekdüze
mortal|ölümlü
mutual|karşılıklı
mysterious|gizemli
naive|saf / deneyimsiz
negligent|ihmalkar
neutral|tarafsız
noble|soylu / asil
notable|dikkat çekici
notorious|adı kötüye çıkmış
numerous|çok sayıda
obscure|belirsiz / az bilinen
obsolete|modası geçmiş / kullanılmayan
offensive|saldırgan / kırıcı
ongoing|devam eden
optimistic|iyimser
optional|isteğe bağlı
oral|sözlü
oriental|doğu / şark
orthodox|geleneksel / ortodoks
outdated|modası geçmiş
outgoing|dışa dönük / sosyal
outrageous|rezalet / aşırı
outstanding|olağanüstü / göze çarpan
overseas|denizaşırı / yurt dışı
partial|kısmi / taraflı
passive|pasif / edilgen
pathetic|acınası
peculiar|tuhaf / kendine özgü
persistent|ısrarcı / kalıcı
pessimistic|kötümser
petty|önemsiz / küçük
picturesque|pitoresk / tablo gibi
pious|dindar
plausible|makul / akla yatkın
poetic|şiirsel
potent|güçlü / etkili
potential|potansiyel / olası
pragmatic|pragmatik / faydacı
precarious|tehlikeli / belirsiz
precise|tam / kesin
predominant|baskın / hakim
preliminary|ön / hazırlık
premature|erken / vaktinden önce
prestigious|prestijli / saygın
prevailing|yaygın / hakim
primitive|ilkel
prior|önceki
productive|üretken / verimli
profound|derin / köklü
progressive|ilerici
prominent|önde gelen / belirgin
promising|umut verici
prone|eğilimli / yatkın
proportional|orantılı
prospective|müstakbel / olası
protective|koruyucu
provocative|kışkırtıcı
prudent|sağduyulu / tedbirli
psychological|psikolojik
punctual|dakik
radical|köklü / radikal
random|rastgele
rational|akılcı / mantıklı
rebellious|asi
reckless|dikkatsiz / pervasız
redundant|gereksiz / ihtiyaç fazlası
regional|bölgesel
relevant|ilgili / alakalı
reluctant|isteksiz / gönülsüz
renowned|ünlü / tanınmış
repetitive|tekrarlayıcı
representative|temsili
residential|yerleşim / konut
resilient|esnek / çabuk toparlanan
respective|ilgili / kendi
restless|huzursuz
retail|perakende
retrospective|geçmişe dönük
revolutionary|devrimci
rigid|katı / sert
rigorous|titiz / sert
robust|sağlam / gürbüz
ruthless|acımasız
sacred|kutsal
sane|aklı başında
sarcastic|alaycı
savage|vahşi
scarce|kıt / nadir
skeptical|şüpheci
secular|laik
selective|seçici
sensational|sansasyonel / heyecan verici
sequential|sıralı
shabby|yıpranmış / bakımsız
sheer|katıksız / tam
simultaneous|eşzamanlı
sincere|samimi / içten
slender|ince / narin
sober|ayık / ağırbaşlı
solemn|ciddi / ağırbaşlı
solidarity|dayanışma
solitary|yalnız / tek başına
sophisticated|gelişmiş / kültürlü
spacious|ferah / geniş
sparse|seyrek
spatial|mekansal
spontaneous|kendiliğinden / spontane
sporadic|ara sıra olan
stable|istikrarlı / sabit
stagnant|durgun
stark|sert / tam
stationary|sabit / hareketsiz
statistical|istatistiksel
steady|istikrarlı / düzenli
sterile|steril / kısır
stern|sert / ciddi
straightforward|açık / basit
strategic|stratejik
striking|çarpıcı / dikkat çekici
structural|yapısal
stubborn|inatçı
stunning|çarpıcı / göz kamaştırıcı
subjective|öznel
subsequent|sonraki
substantial|önemli / büyük miktarda
subtle|ince / göze çarpmayan
sufficient|yeterli
superficial|yüzeysel
superior|üstün
supplementary|ek / tamamlayıcı
supreme|en yüce / en üstün
susceptible|hassas / duyarlı
suspicious|şüpheli / kuşkucu
symbolic|sembolik
sympathetic|anlayışlı / sempatik
systematic|sistematik
tactful|nazik / düşünceli
tangible|somut / dokunulabilir
tedious|sıkıcı / bıktırıcı
tentative|geçici / kesin olmayan
terminal|son / ölümcül
terrific|harika / müthiş
theoretical|teorik
thorough|kapsamlı / titiz
thoughtful|düşünceli
timid|çekingen / ürkek
tolerant|hoşgörülü
tragic|trajik
transparent|şeffaf
tremendous|muazzam / çok büyük
trivial|önemsiz / sıradan
turbulent|çalkantılı
ultimate|nihai / en son
unanimous|oybirliğiyle
unaware|habersiz / farkında olmayan
uncertain|belirsiz
unconditional|koşulsuz
underlying|altında yatan
undoubtedly|şüphesiz
unexpected|beklenmedik
unfortunate|talihsiz
universal|evrensel
unprecedented|eşi benzeri görülmemiş
unpredictable|tahmin edilemez
unreasonable|mantıksız
unstable|istikrarsız
upright|dik / dürüst
utmost|azami / en yüksek
vague|belirsiz / muğlak
vain|kibirli / boşuna
valid|geçerli
vast|çok geniş / engin
verbal|sözlü
versatile|çok yönlü
vertical|dikey
viable|uygulanabilir / yaşayabilir
vicious|acımasız / kötü niyetli
vigorous|dinç / enerjik
virtuous|erdemli
vital|hayati / çok önemli
vivid|canlı (renk/anı)
vocal|sesli / sözünü esirgemeyen
volatile|değişken / uçucu
voluntary|gönüllü
vulnerable|savunmasız / hassas
wary|tedbirli / ihtiyatlı
weary|yorgun / bıkkın
widespread|yaygın
witty|nüktedan / esprili
worthwhile|zahmete değer
worthy|layık / değer
wretched|perişan / sefil
zealous|gayretli / hevesli
accordingly|buna göre
additionally|ek olarak
adequately|yeterli bir şekilde
admittedly|kabul etmek gerekir ki
allegedly|iddia edildiğine göre
altogether|tamamen / hep birlikte
annually|yıllık olarak
apparently|görünüşe göre
approximately|yaklaşık olarak
arguably|muhtemelen / tartışılabilir
automatically|otomatik olarak
briefly|kısaca
broadly|genel olarak
carelessly|dikkatsizce
cautiously|tedbirli bir şekilde
chiefly|başlıca
coincidentally|tesadüfen
collectively|topluca
comparatively|nispeten / kıyasla
consequently|sonuç olarak
considerably|önemli ölçüde
consistently|tutarlı bir şekilde
constantly|sürekli olarak
conversely|aksine / tersine
crucially|kritik bir şekilde
deliberately|kasten / bilerek
desperately|umutsuzca
distinctly|açıkça / belirgin şekilde
drastically|köklü bir şekilde
effectively|etkili bir şekilde
efficiently|verimli bir şekilde
equally|eşit olarak
essentially|esasen / temelde
evidently|açıkça / belli ki
exceedingly|son derece
exclusively|sadece / münhasıran
explicitly|açıkça
extensively|kapsamlı bir şekilde
extremely|son derece
fairly|oldukça / adilce
faithfully|sadakatle
fiercely|şiddetle
formally|resmi olarak
formerly|eskiden
frankly|açıkçası
freely|özgürce
fundamentally|temelde
genuinely|gerçekten / samimiyetle
greatly|büyük ölçüde
hence|bu yüzden / dolayısıyla
historically|tarihsel olarak
hopefully|umarım
ideally|ideal olarak
immensely|son derece
incidentally|bu arada / tesadüfen
increasingly|giderek artan bir şekilde
independently|bağımsız olarak
inevitably|kaçınılmaz olarak
initially|başlangıçta
intensely|yoğun bir şekilde
intentionally|kasten
ironically|ironik bir şekilde
jointly|ortaklaşa
largely|büyük ölçüde
legally|yasal olarak
literally|kelimesi kelimesine / resmen
locally|yerel olarak
loosely|gevşekçe
manually|elle
markedly|belirgin şekilde
mentally|zihinsel olarak
merely|sadece / yalnızca
mildly|hafifçe
moderately|ılımlı bir şekilde
morally|ahlaki açıdan
mutually|karşılıklı olarak
namely|yani / şöyle ki
naturally|doğal olarak
necessarily|mutlaka / zorunlu olarak
newly|yeni
nonetheless|yine de / buna rağmen
notably|özellikle / dikkat çekici şekilde
objectively|nesnel olarak
officially|resmi olarak
openly|açıkça
ordinarily|normalde
originally|başlangıçta / aslen
overwhelmingly|ezici bir çoğunlukla
partially|kısmen
particularly|özellikle
permanently|kalıcı olarak
physically|fiziksel olarak
politically|siyasi açıdan
potentially|potansiyel olarak
practically|neredeyse / pratik olarak
precisely|tam olarak
predominantly|ağırlıklı olarak
presumably|muhtemelen / sanırım
primarily|öncelikle / esasen
principally|başlıca
privately|özel olarak
progressively|giderek
promptly|derhal / vakit kaybetmeden
properly|düzgün bir şekilde
publicly|alenen / herkesin önünde
purely|sadece / tamamen
radically|köklü bir şekilde
randomly|rastgele
rapidly|hızla
readily|kolaylıkla / seve seve
reasonably|makul ölçüde
regardless|bakılmaksızın / her şeye rağmen
regularly|düzenli olarak
relatively|nispeten
reliably|güvenilir bir şekilde
reluctantly|isteksizce
remarkably|dikkat çekici şekilde
repeatedly|tekrar tekrar
reportedly|bildirildiğine göre
respectively|sırasıyla
roughly|kabaca / yaklaşık
routinely|rutin olarak
scarcely|neredeyse hiç
seemingly|görünüşe göre
severely|şiddetli bir şekilde
sharply|keskin bir şekilde
shortly|kısa süre sonra
significantly|önemli ölçüde
similarly|benzer şekilde
simultaneously|eşzamanlı olarak
sincerely|içtenlikle
slightly|hafifçe
solely|sadece / tek başına
somewhat|biraz / bir dereceye kadar
specifically|özellikle
steadily|istikrarlı bir şekilde
strictly|kesinlikle / sıkıca
strongly|güçlü bir şekilde
subsequently|daha sonra / akabinde
substantially|önemli ölçüde
successfully|başarıyla
sufficiently|yeterince
supposedly|sözde / güya
surely|elbette / şüphesiz
temporarily|geçici olarak
thoroughly|tamamen / iyice
thus|böylece / bu nedenle
tightly|sıkıca
tremendously|muazzam derecede
truly|gerçekten
ultimately|sonuçta / nihayetinde
unanimously|oybirliğiyle
unexpectedly|beklenmedik bir şekilde
unfairly|adaletsizce
universally|evrensel olarak
urgently|acil olarak
utterly|tamamen
vaguely|hayal meyal / belirsizce
virtually|neredeyse / sanal olarak
widely|yaygın olarak
willingly|isteyerek
`},
{id:"B2",text:`

abstraction|soyutlama
ambiguity|belirsizlik / çok anlamlılık
analogy|benzeşim / analoji
anomaly|aykırılık / anormallik
antithesis|karşı sav / antitez
apathy|ilgisizlik / kayıtsızlık
arbitrariness|keyfilik
aspiration|yüksek hedef / arzu
autonomy|özerklik / bağımsızlık
axiom|belit / aksiyom
benevolence|iyilikseverlik
brevity|kısalık / özlülük
catalyst|katalizör / hızlandırıcı etken
causality|nedensellik
coherence|tutarlılık
complexity|karmaşıklık
conception|kavrayış / anlayış
consensus|fikir birliği / uzlaşı
consistency|tutarlılık / istikrar
contradiction|çelişki
convention|gelenek / yerleşik kural
conviction|kesin inanç / kanaat
credibility|güvenilirlik / inanılırlık
criterion|ölçüt / kriter
cynicism|alaycılık / şüphecilik
deduction|tümdengelim / çıkarım
deficiency|eksiklik / yetersizlik
deliberation|derin düşünme / müzakere
denial|inkar / reddetme
deprivation|yoksunluk / mahrumiyet
determinism|belirlenimcilik
dilemma|ikilem
dimension|boyut
discrepancy|tutarsızlık / uyuşmazlık
discretion|sağduyu / takdir yetkisi
dogma|dogma / sorgulanmaz inanç
dualism|ikicilik
eccentricity|sıra dışılık / tuhaflık
enlightenment|aydınlanma
entity|varlık / mevcudiyet
essence|öz / esas
fallacy|yanılgı / safsata
feasibility|uygulanabilirlik / yapılabilirlik
fluctuation|dalgalanma
foresight|öngörü
formulation|formüle etme / ifade biçimi
fragility|kırılganlık
frustration|hayal kırıklığı / hüsran
futility|boşunalık / nafilelik
generalization|genelleme
genesis|oluşum / başlangıç
hierarchy|hiyerarşi / ast-üst düzeni
humanitarianism|insancıllık
idealism|idealizm
implication|ima / olası sonuç
inclination|eğilim / meyil
inconsistency|tutarsızlık
indifference|kayıtsızlık / aldırmazlık
induction|tümevarım
inevitability|kaçınılmazlık
inference|çıkarım
ingenuity|yaratıcılık / ustalık
insight|içgörü / derin kavrayış
integrity|dürüstlük / bütünlük
introspection|iç gözlem
justification|gerekçelendirme / haklı çıkarma
legitimacy|meşruiyet
magnitude|büyüklük / önem derecesi
manifestation|belirti / dışavurum
mechanism|mekanizma / işleyiş
mentality|zihniyet
methodology|yöntem bilimi
moderation|ılımlılık / ölçülülük
morality|ahlak anlayışı
multiplicity|çokluk / çeşitlilik
negligence|ihmalkarlık
neutrality|tarafsızlık
nostalgia|nostalji / geçmişe özlem
novelty|yenilik / özgünlük
nuance|nüans / ince fark
obsession|takıntı
omnipotence|her şeye gücü yetme
optimism|iyimserlik
paradox|paradoks / çelişki
pessimism|kötümserlik
plausibility|akla yatkınlık
polarity|kutupluluk
pragmatism|faydacılık / pragmatizm
precaution|önlem / tedbir
predicament|çıkmaz / zor durum
premise|öncül / dayanak
preoccupation|meşguliyet / takıntı
proficiency|ustalık / yeterlilik
propensity|eğilim / yatkınlık
rationality|akılcılık
realism|gerçekçilik
reciprocity|karşılıklılık
relativity|görelilik
relevance|ilgi / alaka
reliability|güvenilirlik
reluctance|isteksizlik
resilience|dayanıklılık / çabuk toparlanma
restraint|kısıtlama / kendini tutma
revelation|ifşa / şaşırtıcı gerçek
rigidity|katılık / esnemezlik
scrutiny|titiz inceleme
skepticism|kuşkuculuk
serenity|dinginlik / huzur
significance|önem / anlam
simplicity|sadelik / basitlik
sincerity|samimiyet
solitude|yalnızlık / tenhalık
speculation|spekülasyon / tahmin
spontaneity|kendiliğindenlik
stagnation|durgunluk
subjectivity|öznellik
subtlety|incelik / ayrıntı
sufficiency|yeterlilik
superstition|batıl inanç
susceptibility|hassasiyet / yatkınlık
tenacity|azim / sebat
tolerance|hoşgörü
transparency|şeffaflık
uncertainty|belirsizlik
uniformity|tekdüzelik / yeknesaklık
urgency|aciliyet
validity|geçerlilik
versatility|çok yönlülük
vigilance|teyakkuz / dikkat
vitality|canlılık / yaşama gücü
vulnerability|savunmasızlık / hassasiyet
acquisition|satın alma / edinim
allocation|tahsis / paylaştırma
amortization|amortisman / borç itfası
appraisal|değerleme / performans değerlendirmesi
arbitration|tahkim / arabuluculuk
audit|denetim / hesap kontrolü
austerity|kemer sıkma politikası
bailout|kurtarma paketi (mali)
benchmark|kıyaslama ölçütü
beneficiary|hak sahibi / lehtar
bid|teklif / ihale teklifi
boom|ekonomik patlama / hızlı büyüme
broker|aracı / komisyoncu
bureaucracy|bürokrasi
cartel|kartel
cash flow|nakit akışı
collateral|teminat / kefalet
conglomerate|holding / şirketler topluluğu
consortium|konsorsiyum
contingency|beklenmedik durum / acil durum fonu
copyright|telif hakkı
corporate|kurumsal
creditor|alacaklı
debtor|borçlu
deficit|bütçe açığı
deflation|deflasyon
delegation|heyet / yetki devri
depreciation|değer kaybı / amortisman
deregulation|kuralsızlaştırma / serbestleştirme
dividend|temettü / kar payı
downsizing|küçülme (şirket)
entrepreneur|girişimci
entrepreneurship|girişimcilik
equity|öz sermaye / hisse
feasibility study|fizibilite çalışması
fiscal|mali / hazineyle ilgili
franchise|bayilik / imtiyaz
freelancer|serbest çalışan
gross domestic product|gayri safi yurt içi hasıla
incorporation|şirketleşme
infrastructure|altyapı
insolvency|ödeme aczi / iflas
intellectual property|fikri mülkiyet
joint venture|ortak girişim
liability|yükümlülük / borç
liquidation|tasfiye (şirket)
liquidity|likidite / nakit akışkanlığı
macroeconomics|makroekonomi
microeconomics|mikroekonomi
monopolize|tekelleştirmek
moratorium|moratoryum / borç erteleme
multinational|çok uluslu
outsourcing|dış kaynak kullanımı
payroll|maaş bordrosu
portfolio|portföy
privatization|özelleştirme
procurement|tedarik / satın alma
productivity|verimlilik
profitability|karlılık
projection|tahmin / projeksiyon
proprietor|işletme sahibi
prospectus|izahname / tanıtım broşürü
quota|kota / kontenjan
reimbursement|geri ödeme / masraf iadesi
remittance|havale / döviz transferi
restructuring|yeniden yapılandırma
solvency|ödeme gücü
stakeholder|paydaş / ilgili taraf
stimulus|ekonomik teşvik
stockholder|hisse senedi sahibi
subcontractor|taşeron
surcharge|ek ücret
syndicate|sendika / birlik
takeover|devralma (şirket)
tax evasion|vergi kaçakçılığı
tender|ihale
trademark|ticari marka
treasury|hazine
underwriter|sigortacı / garantör
valuation|değerleme
venture capital|risk sermayesi
abolition|yürürlükten kaldırma / lağvetme
acquittal|beraat
adjournment|erteleme (duruşma/oturum)
advocacy|savunuculuk
affidavit|yeminli ifade
allegation|iddia / suçlama
amnesty|genel af
annexation|ilhak / toprak katma
arbitrator|hakem (hukuk)
asylum seeker|sığınmacı
atrocity|vahşet / zulüm
authoritarian|otoriter
autocracy|otokrasi
backlash|sert tepki
bilateral|iki taraflı
blockade|abluka
breach|ihlal / bozma
bureaucratic|bürokratik
ceasefire|ateşkes
charter|tüzük / sözleşme
coercion|zorlama / baskı
compliance|uyum / riayet
concession|taviz / imtiyaz
confiscation|el koyma / müsadere
constituency|seçim bölgesi
contempt|itaatsizlik / mahkemeye saygısızlık
coup|darbe
deportation|sınır dışı etme
deterrence|caydırıcılık
diplomacy|diplomasi
disarmament|silahsızlanma
dissent|muhalefet / fikir ayrılığı
domestic policy|iç politika
embargo|ambargo
enactment|yasalaştırma
enforcement|yaptırım / uygulama
entitlement|hak / yetki
envoy|elçi / temsilci
extradition|suçlunun iadesi
faction|hizip / grup
federalism|federalizm
foreign policy|dış politika
genocide|soykırım
governance|yönetişim / idare
grievance|şikayet / mağduriyet
hegemony|hegemonya / üstünlük
immunity|dokunulmazlık
impeachment|görevden alma soruşturması
impunity|cezasızlık
incarceration|hapse atma
incitement|kışkırtma / tahrik
indictment|iddianame
infringement|hak ihlali
injunction|ihtiyati tedbir
insurgency|ayaklanma / isyan
jurisdiction|yargı yetkisi
lawsuit|dava
leniency|hoşgörü / ceza indirimi
litigation|dava süreci
lobbying|lobicilik
mandate|yetki / manda
martial law|sıkıyönetim
mediation|arabuluculuk
militia|milis / gönüllü asker
misconduct|görevi kötüye kullanma
ordinance|yönetmelik / kararname
pacifism|barışçıllık / pasifizm
partisan|taraflı / partizan
perjury|yalan yere yemin etme
persecution|zulüm / eziyet
plea|savunma / yalvarma
pluralism|çoğulculuk
precedent|emsal / içtihat
prerogative|ayrıcalık / imtiyaz
probation|denetimli serbestlik
prosecution|kovuşturma / savcılık
ratification|onaylama (antlaşma)
reconciliation|uzlaşma / barışma
red tape|kırtasiyecilik / bürokrasi
repatriation|ülkesine geri gönderme
repeal|yürürlükten kaldırma
repression|baskı / sindirme
retaliation|misilleme
rhetoric|hitabet / söylem
sanctuary|sığınak / dokunulmaz alan
sedition|isyan kışkırtıcılığı
segregation|ayrımcılık / tecrit
statute|yasa / tüzük
subpoena|mahkeme celbi
suffrage|oy hakkı
surveillance|gözetim / izleme
totalitarian|totaliter
tyranny|tiranlık / zorbalık
unconstitutional|anayasaya aykırı
veto|veto
aerodynamics|aerodinamik
aggregate|küme / toplam
alchemy|simya
alkali|alkali
alloy|alaşım
amplitude|genlik
analog|analog
antimatter|karşı madde
aperture|açıklık / diyafram
appliance|elektrikli ev aleti
biochemistry|biyokimya
biodegradable|doğada çözünebilir
biofuel|biyoyakıt
biotechnology|biyoteknoloji
botany|botanik / bitki bilimi
calibration|kalibrasyon / ayarlama
capacitor|kapasitör / kondansatör
centrifuge|santrifüj
circuitry|devre sistemi
cloning|klonlama
combustion|yanma
compatibility|uyumluluk
computation|hesaplama
conductivity|iletkenlik
configuration|yapılandırma
constellation|takımyıldız
containment|muhafaza / kontrol altında tutma
convergence|yakınsama / birleşme
cosmology|evren bilimi / kozmoloji
cryptography|kriptografi / şifreleme bilimi
cybernetics|sibernetik
cybersecurity|siber güvenlik
decompression|basınç düşürme
decryption|şifre çözme
diagnostics|tanılama / arıza tespiti
diffraction|kırınım
digitalization|dijitalleşme
diode|diyot
distillation|damıtma
durability|dayanıklılık
dynamics|dinamik
efficiency|verimlilik
electrode|elektrot
electromagnetic|elektromanyetik
electron|elektron
equilibrium|denge (fiziksel/kimyasal)
evaporation|buharlaşma
fermentation|fermantasyon / mayalanma
fiber optics|fiber optik
filtration|süzme / filtrasyon
firmware|donanım yazılımı
fission|çekirdek bölünmesi
fluid|akışkan
frequency|frekans / sıklık
fusion|füzyon / birleşme
genome|genom
geothermal|jeotermal
hydraulics|hidrolik
ignition|ateşleme
illumination|aydınlatma
interface|arayüz
isotope|izotop
kinematics|kinematik
kinetic|kinetik
latency|gecikme süresi
leverage|kaldıraç / etki gücü
logarithm|logaritma
lubrication|yağlama
magnetism|manyetizma
mainframe|ana bilgisayar
malfunction|arıza
malware|kötü amaçlı yazılım
mechanics|mekanik
metallurgy|metalurji
meteorology|meteoroloji
microprocessor|mikroişlemci
miniaturization|minyatürleştirme
modulation|modülasyon
nanotechnology|nanoteknoloji
neutron|nötron
nucleus|çekirdek (atom/hücre)
optics|optik
oscillation|salınım
oxidation|oksitlenme / paslanma
parameter|parametre
particle|parçacık
pendulum|sarkaç
perpetual|sürekli / kesintisiz
photovoltaic|fotovoltaik (güneş pili)
polymer|polimer
precision|hassasiyet / kesinlik
prototype|prototip / ilk örnek
quantum|kuantum
radioactivity|radyoaktivite
refraction|ışık kırılması
replication|kopyalama / çoğaltma
resistance|direnç
resonance|rezonans / yankılanım
robotics|robotik
semiconductor|yarı iletken
singularity|tekillik
solar panel|güneş paneli
spectrum|tayf / spektrum
static|statik / durgun
sterilization|sterilizasyon
supercomputer|süper bilgisayar
synchronization|senkronizasyon / eşzamanlama
telemetry|telemetri / uzaktan ölçüm
thermodynamics|termodinamik
topography|topoğrafya
trajectory|yörünge / izlek
transistor|transistör
turbine|türbin
ultraviolet|morötesi / ultraviyole
vacuum|vakum / boşluk
wavelength|dalga boyu
zoology|zooloji / hayvan bilimi
addictive|bağımlılık yapıcı
adolescence|ergenlik dönemi
adrenaline|adrenalin
ailment|rahatsızlık / hafif hastalık
allergen|alerjen
amputation|uzuv kesilmesi
analgesic|ağrı kesici
anemia|kansızlık
anesthetic|anestezik / uyuşturucu madde
antibody|antikor
antidepressant|antidepresan
antidote|panzehir
antiseptic|antiseptik / mikrop kırıcı
arthritis|eklem iltihabı / artrit
asymptomatic|belirti göstermeyen
benign|iyi huylu (tümör)
biopsy|biyopsi
burnout|tükenmişlik sendromu
carcinogen|kanserojen
cardiovascular|kalp ve damar ile ilgili
clinical|klinik
cognitive|bilişsel
coma|koma
communicable|bulaşıcı
complication|komplikasyon / yan etki
compulsive|takıntılı / dürtüsel
congenital|doğuştan gelen
contagious|bulaşıcı (temasla)
convalescence|nekahet / iyileşme dönemi
degenerative|yıpratıcı / dejeneratif
delirium|hezeyan / sayıklama
dependence|bağımlılık
depressive|depresif
dermatology|dermatoloji / cilt bilimi
detoxification|detoks / zehirden arınma
disability|engellilik
displacement|yer değiştirme (psikoloji)
dissociation|kopukluk / çözülme
dysfunction|işlev bozukluğu
eating disorder|yeme bozukluğu
endocrine|iç salgı
epidemiology|salgın bilimi
epilepsy|sara / epilepsi
euphoria|coşku / öfori
extrovert|dışa dönük kimse
fertility|doğurganlık / üretkenlik
fetus|cenin / fetüs
geriatrics|yaşlılık bilimi
gynecology|kadın hastalıkları
holistic|bütüncül
homeopathy|homeopati
hygiene|hijyen / temizlik
hypertension|yüksek tansiyon
hypnosis|hipnoz
hypothermia|hipotermi / vücut ısısı düşüklüğü
hysteria|isteri
immunization|bağışıklama / aşılama
impairment|bozukluk / zayıflama
incurable|tedavisi olmayan
infectious|bulaşıcı (enfeksiyon)
infertility|kısırlık
intervention|müdahale
introvert|içe dönük kimse
lesion|lezyon / doku hasarı
lethargy|uyuşukluk / halsizlik
longevity|uzun ömürlülük
malignant|kötü huylu (tümör)
malpractice|yanlış tedavi
medication|ilaç tedavisi
mortality|ölüm oranı
narcissism|narsisizm / özseverlik
neurology|nöroloji / sinir bilimi
neurosis|nevroz
nutritionist|beslenme uzmanı
oncology|kanser bilimi / onkoloji
ophthalmology|göz hastalıkları
orthopedics|ortopedi
outbreak|salgın başlangıcı
palliative|yatıştırıcı / palyatif
paralysis|felç
pathogen|hastalık yapıcı mikroorganizma
pathology|patoloji
pediatrics|çocuk hastalıkları
pharmaceutical|ilaçla ilgili / eczacılık
placebo|plasebo / etkisiz ilaç
post-traumatic|travma sonrası
practitioner|pratisyen / uygulayıcı
predisposition|yatkınlık
prenatal|doğum öncesi
preventive|önleyici / koruyucu
psychosis|psikoz
psychotherapy|psikoterapi
quarantine|karantina
recurrence|nüksetme / tekrarlama
remission|hastalık belirtilerinin azalması
respiratory|solunumla ilgili
resuscitation|hayata döndürme / kalp masajı
sedation|sakinleştirme / uyutma
seizure|nöbet / kriz
senility|bunama / yaşlılık hali
stigma|damga / leke
stimulant|uyarıcı
syndrome|sendrom
therapeutic|tedavi edici
toxicity|zehirlilik
transfusion|kan nakli
ulcer|ülser
vaccination|aşılama
well-being|esenlik / iyilik hali
afforestation|ağaçlandırma
agroecology|tarımsal ekoloji
biomass|biyokütle
biosphere|biyosfer
carbon footprint|karbon ayak izi
carbon neutral|karbon nötr
chlorofluorocarbon|kloroflorokarbon
conservationist|doğa korumacı
contaminant|kirletici madde
degradation|bozulma / tahribat
desalination|tuzdan arındırma
disposable|tek kullanımlık
eco-friendly|çevre dostu
effluent|atık su
environmentalism|çevrecilik
greenhouse gas|sera gazı
groundwater|yeraltı suyu
hazardous waste|tehlikeli atık
hydroelectric|hidroelektrik
incineration|yakarak yok etme (çöp)
industrialization|sanayileşme
insecticide|böcek ilacı
leaching|sızma / yıkanma (toprak)
logging|ağaç kesimi / tomrukçuluk
mitigation|zarar azaltma
monoculture|tek ürün tarımı
natural gas|doğal gaz
non-renewable|yenilenemeyen
oil spill|petrol sızıntısı
overfishing|aşırı avlanma
overpopulation|aşırı nüfus artışı
ozone depletion|ozon tabakasının incelmesi
permafrost|kalıcı donmuş toprak
pollutant|kirletici
preservation|koruma / muhafaza
reclamation|toprak ıslahı
reforestation|yeniden ağaçlandırma
renewable energy|yenilenebilir enerji
reservoir|su deposu / baraj gölü
runoff|yüzey akışı (su)
salinity|tuzluluk
sanitation|sağlık koruma / kanalizasyon
scarcity|kıtlık
sediment|tortu / çökelti
smog|dumanlı sis / hava kirliliği
soil erosion|toprak erozyonu
solar power|güneş enerjisi
toxic waste|zehirli atık
urbanization|kentleşme
watershed|su havzası
wetland|sulak alan
wilderness|el değmemiş doğa
allegory|alegori / sembolik anlatım
alliteration|ses yinelemesi
anthology|seçki / antoloji
antiquity|antik çağ
archetype|ilk örnek / arketip
artifact|tarihi eser / el yapımı nesne
avant-garde|öncü / yenilikçi (sanat)
ballad|balad / halk türküsü
calligraphy|hat sanatı / güzel yazı
caricature|karikatür
chronicle|tarihçe / vakayiname
chronology|kronoloji / zaman dizini
classicism|klasizm
climax|doruk noktası (hikaye)
colonialism|sömürgecilik
commemoration|anma töreni
connoisseur|sanat uzmanı / eksper
critique|eleştirel inceleme
cubism|kübizm
curatorship|küratörlük
decadence|çöküş / yozlaşma
denouement|çözüm bölümü (hikaye)
dialect|lehçe / şive
discourse|söylem / konuşma
dynasty|hanedan
elegy|ağıt
emancipation|özgürleşme / kurtuluş
epic|destan / epik
epilogue|sonsöz / kapanış
epitaph|mezar taşı yazısı
era|çağ / devir
essayist|deneme yazarı
etymology|köken bilimi / etimoloji
euphemism|örtmece / güzel adlandırma
excerpt|alıntı / parça
expressionism|dışavurumculuk
feudalism|feodalizm / derebeylik
figurative|mecazi / figüratif
foreshadowing|önceden haber verme (edebiyat)
humanism|hümanizm / insancıllık
hyperbole|abartma sanatı
iconography|ikonografi
imperialism|emperyalizm
inscription|yazıt / kitabe
jargon|özel dil / jargon
landmark|simge yapı / dönüm noktası
lyricism|lirizm / içtenlik
manuscript|el yazması
memoir|anı / hatırat
minimalism|minimalizm
modernism|modernizm
monologue|monolog / tek kişilik konuşma
motif|motif / ana tema
narrative|anlatı / hikaye
neoclassicism|neoklasizm
novella|uzun öykü
ode|kaside / övgü şiiri
onomatopoeia|yansıma sözcük
oral tradition|sözlü gelenek
ornament|süsleme
oxymoron|tezat / oksimoron
paganism|paganizm / çok tanrıcılık
parable|kıssa / mesel
patronage|sanat koruyuculuğu
periodical|süreli yayın
personification|kişileştirme
philology|filoloji / dil ve edebiyat bilimi
plagiarism|intihal / eser hırsızlığı
playwright|oyun yazarı
postmodernism|postmodernizm
prehistory|tarih öncesi
prologue|önsöz / giriş
protagonist|başkahraman
pseudonym|takma ad / mahlas
reformation|reform hareketi
restoration|yenileme / restorasyon
romanticism|romantizm
semantics|anlam bilimi
semiotics|gösterge bilimi
soliloquy|kendi kendine konuşma (tiyatro)
sonnet|sone (şiir)
syntax|söz dizimi
tapestry|duvar halısı
theology|ilahiyat / tanrı bilimi
vernacular|yerel dil / halk dili
abbreviate|kısaltmak
abdicate|tahttan çekilmek / feragat etmek
abide|uymak / katlanmak
abound|bol bulunmak
abstain|çekimser kalmak / kaçınmak
accentuate|vurgulamak / belirtmek
acclaim|alkışlamak / övmek
acclimatize|iklime/ortama alışmak
account for|açıklamak / oluşturmak
accrue|birikmek / artmak
acquaint|tanıştırmak / bilgilendirmek
acquit|beraat ettirmek
actuate|harekete geçirmek
adhere|bağlı kalmak / yapışmak
adjourn|ertelemek / ara vermek
adjudicate|hüküm vermek / hakemlik yapmak
admonish|uyarmak / azarlamak
adorn|süslemek
affiliate|bağlamak / katılmak
affirm|doğrulamak / onaylamak
afflict|acı vermek / dert olmak
aggravate|kötüleştirmek / kızdırmak
agitate|kışkırtmak / çalkalamak
alienate|yabancılaştırmak / soğutmak
align|hizalamak / aynı çizgiye getirmek
allay|yatıştırmak / hafifletmek
alleviate|hafifletmek / dindirmek
allude|ima etmek / değinmek
amalgamate|birleştirmek / kaynaştırmak
amass|yığmak / biriktirmek
ambush|pusu kurmak
ameliorate|iyileştirmek / düzeltmek
amplify|genişletmek / sesini yükseltmek
annex|ilhak etmek / eklemek
annihilate|yok etmek / imha etmek
annotate|dipnot eklemek / açıklamak
annul|iptal etmek / feshetmek
antagonize|düşman etmek / kızdırmak
appease|yatıştırmak / gönlünü almak
apportion|paylaştırmak / bölüştürmek
appraise|değer biçmek
apprehend|yakalamak / kavramak
arbitrate|arabuluculuk yapmak
articulate|açıkça ifade etmek
ascertain|tespit etmek / kesinleştirmek
ascribe|atfetmek / dayandırmak
aspire|arzulamak / hedeflemek
assail|saldırmak / eleştiri yağmuruna tutmak
assimilate|özümsemek / asimile etmek
assuage|yatıştırmak / dindirmek
atone|telafi etmek / kefaret ödemek
augment|artırmak / çoğaltmak
authenticate|doğrulamak / onaylamak
avert|önlemek / başka yöne çevirmek
baffle|şaşırtmak / aklını karıştırmak
balk|çekinmek / duraksamak
banish|sürgün etmek
beckon|işaret etmek / çağırmak
befriend|arkadaşlık kurmak
beget|yol açmak / doğurmak
begrudge|kıskanmak / çok görmek
belittle|küçümsemek
bemoan|yakınmak / sızlanmak
bequeath|miras bırakmak
berate|azarlamak
besiege|kuşatmak
bestow|bahşetmek / vermek
bewilder|şaşkına çevirmek
blaspheme|küfretmek / dine hakaret etmek
blemish|lekelemek / kusur oluşturmak
blight|mahvetmek / bozmak
blunder|büyük hata yapmak
bolster|desteklemek / güçlendirmek
bombard|bombalamak / soru yağmuruna tutmak
botch|yüzüne gözüne bulaştırmak
brandish|sallamak (silah vb.)
broach|konuyu açmak
browbeat|gözünü korkutmak
buffet|sarsmak / dövmek
bypass|etrafından dolaşmak / atlamak
cajole|tatlı dille kandırmak
calibrate|ayarlamak / kalibre etmek
camouflage|gizlemek / kamufle etmek
capitulate|teslim olmak
captivate|büyülemek / cezbetmek
cater|yemek sağlamak / hitap etmek
censure|kınamak / eleştirmek
centralize|merkezileştirmek
chastise|cezalandırmak / azarlamak
circumvent|etrafından dolaşmak / atlatmak
clamp down|baskı uygulamak / kısıtlamak
cleave|yarmak / sadık kalmak
coalesce|birleşmek / kaynaşmak
coerce|zorlamak / baskı yapmak
cohabit|birlikte yaşamak
commemorate|anmak
commend|övmek / tavsiye etmek
commiserate|acısını paylaşmak
commute|işe gidip gelmek / cezayı hafifletmek
compliment|iltifat etmek
conciliate|uzlaştırmak / yatıştırmak
concur|aynı fikirde olmak
condense|yoğunlaştırmak / kısaltmak
condone|göz yummak / affetmek
confide|sırrını açmak / güvenmek
confiscate|el koymak
conform|uymak / itaat etmek
confound|şaşırtmak / alt etmek
congest|tıkamak / doldurmak
conjure|büyü yapmak / gözünde canlandırmak
connote|çağrıştırmak / ima etmek
consecrate|kutsamak / adamak
consolidate|pekiştirmek / birleştirmek
conspire|komplo kurmak
construe|yorumlamak / anlam çıkarmak
consummate|tamamlamak / zirveye ulaştırmak
contaminate|kirletmek / bulaştırmak
contort|bükmek / çarpıtmak
contrive|uydurmak / planlamak
convene|toplanmak / toplantıya çağırmak
converge|birleşmek / kesişmek
converse|sohbet etmek
convict|suçlu bulmak / mahkum etmek
corroborate|doğrulamak / desteklemek
corrode|aşındırmak / paslandırmak
counteract|etkisini gidermek / karşı koymak
covet|imrenmek / göz dikmek
cower|sinmek / korkudan büzülmek
credential|yetki belgesi vermek
cripple|sakatlamak / felç etmek
culminate|sonuçlanmak / doruğa ulaşmak
curtail|kısaltmak / azaltmak
dabble|amatörce ilgilenmek
dampen|nemlendirmek / hevesini kırmak
daunt|yıldırmak / korkutmak
debilitate|güçten düşürmek
debunk|foyasını ortaya çıkarmak / çürütmek
decipher|şifresini çözmek / sökmek
declaim|nutuk çekmek
declassify|gizliliğini kaldırmak
decompose|çürümek / ayrışmak
decry|kınamak / kötülemek
deface|yüzeyini bozmak / tahrif etmek
defame|iftira atmak / lekelemek
default|yükümlülüğünü yerine getirmemek
defile|kirletmek / saygısızlık etmek
deflect|yönünü değiştirmek / saptırmak
deform|şeklini bozmak
defraud|dolandırmak
defuse|etkisiz hale getirmek / yatıştırmak
degenerate|yozlaşmak / bozulmak
degrade|aşağılamak / derecesini düşürmek
dehydrate|susuz bırakmak
delineate|sınırlarını çizmek / tarif etmek
delude|aldatmak / kandırmak
demolish|yıkmak / yerle bir etmek
demote|rütbesini indirmek
denigrate|karalamak / kötülemek
denote|işaret etmek / anlamına gelmek
deplore|esefle karşılamak / kınamak
deport|sınır dışı etmek
depose|tahttan/görevden indirmek
depreciate|değerini düşürmek / küçümsemek
derail|raydan çıkarmak / aksatmak
deride|alay etmek / küçümsemek
desecrate|kutsallığını bozmak
desist|vazgeçmek / durmak
destabilize|istikrarını bozmak
deter|caydırmak
detonate|patlatmak
detract|değerini azaltmak / dikkatini dağıtmak
devalue|değerini düşürmek
deviate|sapmak / ayrılmak
devolve|devretmek / geçmek
diffuse|yaymak / dağıtmak
digress|konudan sapmak
dilute|seyreltmek / sulandırmak
disband|dağıtmak (grup/örgüt)
discern|fark etmek / seçmek
disclaim|reddetmek / inkar etmek
disconcert|şaşırtmak / huzursuz etmek
discredit|itibarını sarsmak
discriminate|ayrımcılık yapmak
disembark|gemiden/uçaktan inmek
disenchant|hayal kırıklığına uğratmak
disentangle|çözmek / kurtarmak
disintegrate|parçalanmak / dağılmak
dismantle|sökmek / parçalarına ayırmak
disparage|küçümsemek / kötülemek
dispatch|göndermek / sevk etmek
dispel|gidermek / dağıtmak (şüphe/korku)
dispense|dağıtmak / muaf tutmak
disperse|dağıtmak / yayılmak
displace|yerinden etmek
dissect|parçalara ayırıp incelemek
disseminate|yaymak (bilgi/fikir)
dissipate|dağılmak / harcamak
dissuade|vazgeçirmek
distill|damıtmak / özünü çıkarmak
diverge|ayrılmak / farklılaşmak
divest|mahrum bırakmak / elden çıkarmak
divulge|ifşa etmek / sırrı açmak
domesticate|evcilleştirmek
downplay|önemsiz göstermek
dwindle|azalmak / küçülmek
edify|eğitmek / ahlaken geliştirmek
efface|silmek / yok etmek
elicit|ortaya çıkarmak / ağzından laf almak
elude|kaçmak / kurtulmak
emancipate|özgürlüğüne kavuşturmak
embark|gemiye binmek / girişmek
embellish|süslemek / abartmak
embezzle|zimmetine para geçirmek
emulate|taklit etmek / özenmek
encapsulate|özetlemek / kapsamak
enchant|büyülemek
encompass|kapsamak / içine almak
encroach|ihlalde bulunmak / sınırını aşmak
encumber|engellemek / yük olmak
endear|sevdirmek
endow|bağışlamak / donatmak
engross|bütün dikkatini çekmek
engulf|yutmak / sarmak
enjoin|emretmek / yasaklamak
enslave|köleleştirmek
ensue|ardından gelmek / sonuçlanmak
entangle|dolaştırmak / bulaştırmak
entice|cezbetmek / ayartmak
entrench|sağlamlaştırmak / yerleştirmek
entrust|emanet etmek
enumerate|tek tek saymak / sıralamak
envisage|tasarlamak / öngörmek
epitomize|özetlemek / simgesi olmak
equate|eşit tutmak
equivocate|kaçamak konuşmak
escalate|tırmanmak / kızışmak
eschew|kaçınmak / uzak durmak
espouse|benimsemek / desteklemek
estrange|yabancılaştırmak / soğutmak
etch|kazımak / oymak
evade|kaçmak / atlatmak
exacerbate|kötüleştirmek / şiddetlendirmek
exalt|yüceltmek / övmek
exasperate|çileden çıkarmak
excavate|kazı yapmak
excommunicate|aforoz etmek
exemplify|örnek oluşturmak
exempt|muaf tutmak
exhale|nefes vermek
exhilarate|neşelendirmek / canlandırmak
exhort|teşvik etmek / öğütlemek
exhume|mezardan çıkarmak
exonerate|aklamak / temize çıkarmak
expedite|hızlandırmak / çabuklaştırmak
expend|harcamak / tüketmek
expiate|kefaretini ödemek
expire|süresi dolmak
explicate|açıklamak / yorumlamak
expropriate|kamulaştırmak / el koymak
expunge|silmek / çıkarmak
extol|göklere çıkarmak / övmek
extort|zorla almak / haraç kesmek
extradite|suçluyu iade etmek
extrapolate|sonuç çıkarmak / tahmin yürütmek
extricate|kurtarmak / çekip çıkarmak
exude|yaymak / sızdırmak
falsify|sahtesini yapmak / çarpıtmak
fathom|anlamak / derinliğini ölçmek
feign|numara yapmak / gibi görünmek
fester|iltihaplanmak / kötüleşmek
fetter|zincire vurmak / kısıtlamak
filibuster|mecliste konuşmayı uzatarak engellemek
finesse|ustalıkla halletmek
flatter|iltifat etmek / pohpohlamak
flaunt|gösteriş yapmak
flinch|irkilmek / geri çekilmek
flounder|bocalamak / çırpınmak
foil|boşa çıkarmak / engellemek
foment|kışkırtmak / körüklemek
forfeit|kaybetmek / mahrum kalmak
forge|sahtesini yapmak / dövmek (demir)
forsake|terk etmek / yüzüstü bırakmak
fortify|güçlendirmek / tahkim etmek
frustrate|hüsrana uğratmak / engellemek
galvanize|harekete geçirmek / canlandırmak
garner|toplamak / elde etmek
gasp|soluğu kesilmek / nefes nefese kalmak
generalize|genellemek
germinate|filizlenmek
gloat|kötü niyetle sevinmek
goad|kışkırtmak / dürtmek
gouge|oymak / kazıklamak
gravitate|çekilmek / meyletmek
grimace|yüzünü buruşturmak
groan|inlemek
grope|el yordamıyla aramak
grovel|el pençe divan durmak / yalvarmak
grudge|kıskanmak / kin beslemek
grumble|homurdanmak
hamper|engellemek / kösteklemek
harmonize|uyum sağlamak
harrow|eziyet etmek / sürmek (tarla)
heave|kaldırmak / derin nefes almak
heed|dikkate almak / kulak vermek
herald|müjdelemek / habercisi olmak
hibernate|kış uykusuna yatmak
hoodwink|kandırmak / gözünü boyamak
hover|havada asılı kalmak
huddle|bir araya toplanmak / sokulmak
hurl|fırlatmak
idolize|putlaştırmak / aşırı sevmek
ignite|ateşlemek / tutuşturmak
illuminate|aydınlatmak
immobilize|hareketsiz hale getirmek
impair|bozmak / zayıflatmak
impale|kazığa oturtmak / delmek
impart|vermek / iletmek (bilgi)
impede|engellemek / geciktirmek
impel|zorlamak / itmek
imperil|tehlikeye atmak
impersonate|taklidini yapmak / kılığına girmek
implicate|bulaştırmak / ima etmek
implore|yalvarmak
impoverish|fakirleştirmek
improvise|doğaçlama yapmak
inaugurate|açılışını yapmak / göreve başlatmak
incapacitate|aciz bırakmak / sakatlamak
incarcerate|hapsetmek
incense|çok kızdırmak
incinerate|yakıp kül etmek
incite|kışkırtmak / tahrik etmek
incriminate|suçlamak / suçlu göstermek
incubate|kuluçkaya yatmak
indemnify|tazminat ödemek
indent|girinti yapmak
indict|suçlamak / dava açmak
indoctrinate|beynini yıkamak / aşılamak
inebriate|sarhoş etmek
infiltrate|sızmak
inflame|alevlendirmek / kızdırmak
inflate|şişirmek
infringe|ihlal etmek
infuse|aşılamak / demlemek
ingest|yutmak / içine almak
ingratiate|gözüne girmeye çalışmak
inhabit|yaşamak / ikamet etmek
inhale|nefes almak / içine çekmek
inoculate|aşılamak
insinuate|ima etmek
instigate|kışkırtmak / başlatmak
instill|aşılamak / damlatmak
insulate|yalıtmak / izole etmek
intercede|araya girmek / arabuluculuk yapmak
intercept|yolunu kesmek / yakalamak
interlock|kenetlenmek
interrogate|sorguya çekmek
intersperse|serpiştirmek / aralarına koymak
intertwine|iç içe geçmek
intoxicate|sarhoş etmek / zehirlemek
intrigue|merakını uyandırmak / entrika çevirmek
intrude|izinsiz girmek / rahatsız etmek
inundate|su basmak / boğmak
invalidate|geçersiz kılmak
inveigle|kandırıp razı etmek
invert|ters çevirmek
invoke|çağırmak / başvurmak
irk|canını sıkmak
irradiate|ışınlamak / aydınlatmak
irrigate|sulamak
jettison|denize atmak / elden çıkarmak
juxtapose|yan yana koymak
kindle|tutuşturmak / uyandırmak
lacerate|yırtmak / parçalamak
lament|ağıt yakmak / yas tutmak
languish|güçten düşmek / çürümek
lapse|sona ermek / hata yapmak
laud|övmek / methetmek
lavish|bolca vermek
legalize|yasallaştırmak
legitimize|meşrulaştırmak
lessen|azaltmak
levy|vergi koymak / toplamak
liaise|irtibat kurmak
libel|yazılı iftira atmak
liquidate|tasfiye etmek / borç ödemek
loathe|tiksinmek / nefret etmek
lumber|ağır ağır yürümek
magnify|büyütmek / abartmak
maim|sakatlamak
malign|kötülemek / iftira atmak
maneuver|manevra yapmak
manifest|göstermek / belli etmek
marginalize|dışlamak / marjinalleştirmek
masquerade|kılığına girmek
materialize|gerçekleşmek / somutlaşmak
meander|kıvrıla kıvrıla akmak / dolaşmak
meddle|karışmak / burnunu sokmak
mellow|olgunlaşmak / yumuşamak
mesmerize|büyülemek / hipnotize etmek
metamorphose|başkalaşım geçirmek
mete|ceza/ödül vermek
militate|karşı çalışmak / etkili olmak
mingle|karışmak / kaynaşmak
mitigate|hafifletmek / yatıştırmak
mobilize|seferber etmek
mock|alay etmek
mollify|yatıştırmak / yumuşatmak
mortify|küçük düşürmek / utandırmak
muddle|karıştırmak / yüzüne gözüne bulaştırmak
muffle|sesini boğmak / örtmek
mull|üzerinde düşünmek
mutilate|parçalamak / sakatlamak
mystify|şaşırtmak / gizemli kılmak
nab|yakalamak
nag|dırdır etmek
naturalize|vatandaşlığa almak
navigable|gemi işletmeye elverişli
navigate|yön bulmak / yönetmek
negate|geçersiz kılmak / inkar etmek
neutralize|etkisiz hale getirmek
nibble|kemirmek / ufak ısırıklar almak
nullify|hükümsüz kılmak
nurture|beslemek / yetiştirmek
obfuscate|kafasını karıştırmak / gizlemek
obliterate|izini silmek / yok etmek
obstruct|engellemek / tıkamak
officiate|görev yapmak / yönetmek
offset|dengelemek / telafi etmek
ominous|uğursuz
ooze|sızmak / akmak
ostracize|dışlamak / aforoz etmek
oust|görevden almak / kovmak
outdo|geride bırakmak / üstün gelmek
outgrow|büyüyüp sığmamak / vazgeçmek
outlast|daha uzun süre dayanmak
outlaw|yasaklamak / kanun dışı ilan etmek
outlive|daha uzun yaşamak
outmaneuver|kurnazlıkla alt etmek
outpace|geride bırakmak / daha hızlı gitmek
outrage|öfkelendirmek / çileden çıkarmak
outrun|koşarak geçmek
outsmart|kurnazlıkla yenmek
outweigh|daha ağır basmak / üstün gelmek
overhaul|tepeden tırnağa onarmak / gözden geçirmek
overpower|alt etmek / güçle yenmek
overreach|sınırını aşmak
override|geçersiz kılmak / çiğnemek
overrule|reddetmek / bozmak (karar)
oversee|denetlemek / gözetmek
overshadow|gölgede bırakmak
overstate|abartmak
overturn|devirmek / iptal etmek
pacify|yatıştırmak / sakinleştirmek
pamper|şımartmak
paralyze|felç etmek
paraphrase|başka kelimelerle ifade etmek
pardon|affetmek / bağışlamak
partition|bölmek / ayırmak
patronize|tepeden bakmak / müşterisi olmak
penalize|cezalandırmak
permeate|nüfuz etmek / yayılmak
perpetrate|işlemek (suç/hata)
perpetuate|sürdürmek / ebedileştirmek
perplex|kafasını karıştırmak
persecute|zulmetmek
persevere|sebat etmek / azmetmek
personify|kişileştirmek
perturb|tedirgin etmek / huzurunu bozmak
pervade|yayılmak / kaplamak
petrify|taşlaştırmak / korkudan dondurmak
pillage|yağmalamak
pinpoint|tam yerini belirlemek
placate|gönlünü almak / yatıştırmak
plagiarize|intihal yapmak
plunder|yağmalamak / soymak
polarize|kutuplaştırmak
ponder|derin düşünmek
popularize|yaygınlaştırmak
postulate|ileri sürmek / varsaymak
preach|vaaz vermek
precipitate|hızlandırmak / yol açmak
preclude|önlemek / imkan vermemek
predetermine|önceden belirlemek
predispose|yatkın hale getirmek
preempt|ön almak / engellemek
presume|varsaymak / cüret etmek
prevaricate|kaçamak cevap vermek
privatize|özelleştirmek
probe|araştırmak / incelemek
procrastinate|ertelemek / savsaklamak
procure|sağlamak / temin etmek
profane|saygısızlık etmek
proliferate|hızla çoğalmak / yayılmak
prolong|uzatmak (süre)
propagate|yaymak / üretmek
propel|itmek / sevk etmek
prophesy|kehanette bulunmak
proscribe|yasaklamak / sürgün etmek
protract|uzatmak / sürüncemede bırakmak
protrude|dışarı çıkmak / çıkıntı yapmak
publicize|duyurmak / reklamını yapmak
purge|temizlemek / arındırmak
purify|arıtmak / saflaştırmak
quash|bastırmak / iptal etmek
quell|bastırmak / yatıştırmak
quench|susuzluğunu gidermek / söndürmek
query|sorgulamak / soru sormak
quibble|kılı kırk yarmak / itiraz etmek
radiate|yaymak (ışık/ısı)
rally|toparlanmak / bir araya gelmek
ramify|dallanıp budaklanmak
ransack|altını üstüne getirmek / yağmalamak
ratify|onaylamak (resmen)
ravage|yakıp yıkmak / harap etmek
reap|biçmek / hasat etmek
rebuke|azarlamak / paylamak
recant|sözünü geri almak / inkar etmek
recapitulate|özetlemek
reciprocate|karşılık vermek
reclaim|geri istemek / ıslah etmek
recoil|geri tepmek / irkilmek
recompense|telafi etmek / ödüllendirmek
rectify|düzeltmek / ıslah etmek
recuperate|iyileşmek / sağlığına kavuşmak
redeem|kurtarmak / telafi etmek
redress|düzeltmek / tazmin etmek
reel|sendelemek / başı dönmek
rehabilitate|iyileştirmek / topluma kazandırmak
reign|hüküm sürmek
reimburse|geri ödemek
reiterate|tekrarlamak / yinelemek
rejuvenate|gençleştirmek / canlandırmak
relapse|hastalık/kötü alışkanlığa geri dönmek
relegate|alt lige/dereceye düşürmek
relent|yumuşamak / insafa gelmek
relinquish|vazgeçmek / terk etmek
relish|zevk almak / tadını çıkarmak
remediate|iyileştirmek / düzeltmek
reminisce|eski günleri anmak
remit|havale etmek / affetmek
remonstrate|itiraz etmek / protesto etmek
repatriate|ülkesine geri göndermek
repel|geri püskürtmek / tiksindirmek
repent|pişman olmak / tövbe etmek
replenish|yeniden doldurmak / tazelemek
replicate|kopyalamak / aynısını yapmak
reprimand|azarlamak / kınamak
reproach|ayıplamak / sitem etmek
repudiate|reddetmek / tanımamak
rescind|feshetmek / yürürlükten kaldırmak
resonate|yankılanmak / etki bırakmak
resuscitate|ayıltmak / yeniden canlandırmak
retaliate|misilleme yapmak
retard|geciktirmek / yavaşlatmak
retract|geri çekmek (söz/iddia)
retrieve|geri almak / kurtarmak
reverberate|yankılanmak
revere|saygı duymak / yüceltmek
revile|sövmek / kötülemek
revoke|iptal etmek / geri almak (ehliyet/yetki)
rummage|altını üstüne getirip aramak
rupture|kopmak / patlamak
sabotage|sabote etmek
salvage|kurtarmak (enkazdan vb.)
sanctify|kutsamak
satiate|doyurmak / tatmin etmek
saturate|doyurmak / sırılsıklam etmek
scavenge|çöpleri karıştırmak / leş yemek
scoff|alay etmek / küçümsemek
scorch|kavurmak / yakmak
scour|ovalamak / didik didik aramak
scowl|kaşlarını çatmak
scrutinize|titizlikle incelemek
secede|ayrılmak (birlikten/devletten)
seclude|inzivaya çekmek / ayırmak
secrete|salgılamak / gizlemek
segregate|ayırmak / tecrit etmek
sensationalize|sansasyonel hale getirmek
sequester|el koymak / ayırmak
sever|kesmek / koparmak (ilişki)
shackle|zincirlemek / engellemek
shun|uzak durmak / kaçınmak
sideline|kenara itmek / saf dışı bırakmak
sift|elemek / incelemek
simplify|basitleştirmek
slander|sözlü iftira atmak
slump|çökmek / aniden düşmek
smother|boğmak / bastırmak
snub|terslemek / küçümsemek
solicit|istemek / rica etmek
spawn|üretmek / yol açmak
spearhead|öncülük etmek
squander|çarçur etmek / israf etmek
squash|ezmek / bastırmak
stagnate|durgunlaşmak
stifle|bastırmak / boğmak
stigmatize|damgalamak / lekelemek
stipulate|şart koşmak
stockpile|stoklamak / yığmak
strangle|boğmak
streamline|modernize etmek / kolaylaştırmak
subdue|boyun eğdirmek / bastırmak
subjugate|boyunduruk altına almak
submerge|suya batırmak
subordinate|ikinci plana atmak / tabi kılmak
subside|dinmek / azalmak / çökmek
subsidize|maddi destek sağlamak
substantiate|kanıtlamak / doğrulamak
subvert|yıkmak / altüst etmek
succumb|yenik düşmek / boyun eğmek
suffocate|boğulmak / havasız kalmak
supersede|yerini almak / geçersiz kılmak
supplant|yerini almak
supplement|eklemek / tamamlamak
surmise|tahmin etmek / sanmak
surmount|aşmak / üstesinden gelmek
swindle|dolandırmak
synthesize|sentezlemek
tamper|kurcalamak / tahrif etmek
tarnish|lekelemek / karartmak
taunt|alay etmek / kışkırtmak
teem|kaynamak / dolup taşmak
thwart|engellemek / boşa çıkarmak
topple|devirmek / yıkmak
transcend|aşmak / ötesine geçmek
transcribe|yazıya dökmek
transgress|sınırı aşmak / günah işlemek
transpire|ortaya çıkmak / meydana gelmek
traverse|boyunca geçmek
trivialize|basite indirgemek / önemsizleştirmek
truncate|kısaltmak / budamak
unleash|serbest bırakmak / salıvermek
unravel|çözmek / aydınlatmak
uphold|desteklemek / onaylamak
uproot|kökünden sökmek
usurp|gasp etmek / zorla ele geçirmek
vacillate|bocalamak / kararsız kalmak
vanquish|yenmek / alt etmek
venerate|saygı göstermek / yüceltmek
ventilate|havalandırmak
vilify|karalamak / kötülemek
vindicate|aklamak / haklı çıkarmak
vitiate|bozmak / geçersiz kılmak
wallow|yuvarlanmak / kendini kaptırmak
wane|azalmak / sönmek
warrant|gerektirmek / garanti etmek
waver|tereddüt etmek / sallanmak
wield|kullanmak / sahip olmak (güç/silah)
withhold|alıkoymak / vermemek
withstand|dayanmak / karşı koymak
wrest|zorla almak
yearn|hasret çekmek / çok istemek
abhorrent|iğrenç / tiksindirici
abject|sefil / alçakça
abortive|başarısız / sonuçsuz
abrasive|aşındırıcı / kırıcı
abrupt|ani / kaba
abysmal|berbat / çok kötü
acerbic|sert / iğneleyici
acrid|keskin / acı (koku/tat)
adamant|kararlı / inatçı
adept|usta / becerikli
adroit|maharetli / becerikli
affable|güler yüzlü / cana yakın
affluent|zengin / varlıklı
aggravating|sinir bozucu
akin|benzer / akraba
altruistic|özgecil / diğerkam
ambivalent|kararsız / ikircikli
amiable|sevimli / dost canlısı
amicable|dostane / barışçıl
amorphous|şekilsiz / belirsiz
anachronistic|çağ dışı / anakronik
analogous|benzer
ancestral|atalardan kalma
anecdotal|anekdotlara dayalı
anguished|kederli / acı çeken
animated|canlı / hareketli
antagonistic|düşmanca / muhalif
antiquated|eski moda / modası geçmiş
apathetic|ilgisiz / duygusuz
apocalyptic|kıyamet gibi
appalling|korkunç / dehşet verici
appealing|cazip / çekici
apprehensive|endişeli / kaygılı
arduous|çetin / zahmetli
arid|kurak / verimsiz
ascendant|yükselen / hakim
ascetic|çileci / dünyadan elini eteğini çekmiş
assiduous|çalışkan / gayretli
astute|zeki / kurnaz
atrocious|vahşi / berbat
audacious|cüretkar / cesur
auspicious|uğurlu / hayırlı
austere|sade / sert / tutumlu
authoritative|otoriter / güvenilir
avaricious|açgözlü / tamahkar
avid|istekli / hevesli
banal|sıradan / bayağı
barren|çorak / kısır
belligerent|kavgacı / savaşçı
benevolent|iyiliksever / hayırsever
bereft|yoksun / mahrum
blatant|apaçık / göze batan
blissful|mutlu / mesut
boisterous|gürültülü / taşkın
bombastic|abartılı / şatafatlı
boundless|sınırsız / uçsuz bucaksız
brash|küstah / düşüncesiz
brazen|utanmaz / yüzsüz
brittle|kırılgan / gevrek
bucolic|kırsal / pastoral
burgeoning|hızla büyüyen / gelişen
byzantine|karmaşık / entrikalı
calamitous|felaket getiren
callous|duygusuz / katı kalpli
capricious|kaprisli / değişken
caustic|yakıcı / iğneleyici
celestial|göksel / ilahi
ceremonial|törensel
charismatic|karizmatik
chivalrous|centilmen / şövalye ruhlu
clandestine|gizli / el altından yapılan
cogent|ikna edici / sağlam
cohesive|birleştirici / tutarlı
colossal|devasa / muazzam
combative|kavgacı / mücadeleci
commensurate|orantılı / uygun
complacent|halinden memnun / kayıtsız
complementary|tamamlayıcı
compliant|uyumlu / itaatkar
concise|kısa ve öz
conclusive|kesin / ikna edici
conducive|elverişli / yardımcı
congenial|cana yakın / uygun
conscientious|vicdanlı / titiz
consequential|önemli / sonuç doğuran
contentious|tartışmalı / kavgacı
contingent|bağlı / olası
convoluted|karmaşık / dolambaçlı
copious|bol / çok
cordial|samimi / içten
corporeal|bedensel / maddi
corrosive|aşındırıcı
counterproductive|verimsiz / ters etki yapan
covert|gizli / örtülü
covetous|açgözlü / kıskanç
credulous|saf / kolay kanan
cryptic|gizemli / şifreli
culpable|suçlu / kusurlu
cumbersome|hantal / kullanışsız
cursory|üstünkörü / baştan savma
daunting|göz korkutucu
deceptive|aldatıcı
decorous|terbiyeli / edepli
decrepit|yıpranmış / köhne
deferential|saygılı / hürmetkar
defiant|meydan okuyan / dik başlı
definitive|kesin / nihai
deleterious|zararlı / zehirli
delirious|sayıklayan / çılgına dönmüş
demeanor|tavır / hal
demure|ağırbaşlı / utangaç
deplorable|acınası / kınanacak
depraved|ahlaksız / sapkın
derisive|alaycı
derogatory|küçültücü / aşağılayıcı
desolate|ıssız / terk edilmiş / kederli
despicable|aşağılık / hor görülecek
despondent|umutsuz / morali bozuk
destitute|yoksul / muhtaç
detached|ilgisiz / bağımsız / müstakil
detrimental|zararlı
devout|dindar / sadık
didactic|öğretici
diffident|çekingen / güvensiz
dilapidated|harap / yıkık dökük
diligent|çalışkan / özenli
diminutive|minik / ufacık
dire|korkunç / vahim
discerning|anlayışlı / seçici
disconsolate|teselli bulmaz / kederli
discordant|uyumsuz / ahenksiz
disgruntled|hoşnutsuz / küskün
disingenuous|samimiyetsiz / ikiyüzlü
dismal|kasvetli / berbat
disparate|farklı / apayrı
dispassionate|tarafsız / soğukkanlı
disruptive|yıkıcı / düzen bozucu
dissenting|muhalif
dissident|muhalif / aykırı
distraught|perişan / altüst olmuş
divergent|farklılaşan / ayrılan
docile|uysal / yumuşak başlı
dogmatic|dogmatik / sabit fikirli
dormant|uyuyan / hareketsiz
draconian|çok sert / acımasız (yasa)
duplicitous|ikiyüzlü / sahtekar
ebullient|coşkulu / taşkın
eclectic|seçmeci / çeşitli kaynaklardan derlenen
edible|yenilebilir
eerie|ürkütücü / tekinsiz
effervescent|coşkulu / köpüren
efficacious|etkili / tesirli
effusive|taşkın / aşırı duygulu
egocentric|benmerkezci
egregious|korkunç / göze batan (hata)
elated|çok sevinçli / coşkulu
elusive|ele geçmez / anlaşılması zor
emaciated|bir deri bir kemik kalmış
embattled|kuşatılmış / zor durumda
empathetic|empatik / duygudaş
enigmatic|gizemli / esrarengiz
enlightened|aydın / kültürlü
enthralling|büyüleyici / sürükleyici
ephemeral|kısa ömürlü / geçici
equitable|adil / hakkaniyetli
equivocal|belirsiz / iki anlamlı
erudite|bilgili / kültürlü
esoteric|ezoterik / sadece uzmanların anlayabileceği
ethereal|uhrevi / narin
euphemistic|örtmeceli
evasive|kaçamak / belirsiz
evocative|çağrıştırıcı / duygu uyandırıcı
exacting|titiz / çok şey bekleyen
exorbitant|fahiş / aşırı yüksek (fiyat)
expedient|uygun / çıkarına gelen
expendable|gözden çıkarılabilir
exquisite|enfes / zarif
extant|halihazırda mevcut olan
extemporaneous|doğaçlama
extraneous|konu dışı / yabancı
exuberant|coşkulu / bereketli
facetious|şakacı / ciddi olmayan
fallacious|yanıltıcı / hatalı
fallible|yanılabilir / hata yapabilir
fastidious|titiz / müşkülpesent
fatuous|aptalca / budalaca
fawning|yaltaklanan
feckless|sorumsuz / beceriksiz
felicitous|yerinde / uygun / mutlu
feral|yabani / vahşi
fervent|coşkulu / ateşli
fervid|ateşli / hararetli
fickle|maymun iştahlı / değişken
flagrant|apaçık / yüz kızartıcı
flamboyant|gösterişli / şatafatlı
fleeting|gelip geçici / kısa süreli
flippant|ciddiyetsiz / saygısız
florid|süslü / kırmızı yüzlü
flustered|telaşlanmış / şaşırmış
formidable|korkutucu / müthiş
forthright|açık sözlü / dobra
fortuitous|tesadüfi / şans eseri
fractious|huysuz / kavgacı
frivolous|ciddiyetsiz / havai
frugal|tutumlu / idareli
furtive|gizli / sinsi
garrulous|geveze / çok konuşan
gauche|sakar / görgüsüz
genial|cana yakın / neşeli
ghastly|korkunç / hayalet gibi
glib|akıcı ama samimiyetsiz
gluttonous|obur
grandiose|görkemli / abartılı
gratuitous|gereksiz / sebepsiz
gregarious|sosyal / arkadaş canlısı
grievous|ağır / acı verici
grotesque|tuhaf / çirkin / gülünç
grueling|yorucu / tüketici
guileless|saf / hilesiz
gullible|saf / kolay aldanan
hackneyed|basmakalıp / bayatlamış
haggard|bitkin / çökmüş
halcyon|sakin / huzurlu
haphazard|gelişigüzel / rastgele
hapless|talihsiz / şanssız
haughty|kibirli / mağrur
hedonistic|hazcı
heinous|iğrenç / korkunç (suç)
heretical|sapkın / aykırı
hermetic|hava geçirmez / kapalı
heterogeneous|heterojen / çeşitli
histrionic|abartılı / tiyatral
homogeneous|homojen / türdeş
hyperbolic|abartılı
hypocritical|ikiyüzlü / riyakar
hypothetical|varsayımsal
iconoclastic|gelenek yıkıcı
idiosyncratic|kendine özgü / tuhaf
ignominious|utanç verici / yüz kızartıcı
illicit|yasadışı / yasak
illusory|yanıltıcı / hayali
illustrious|ünlü / şanlı
immaculate|tertemiz / kusursuz
immaterial|önemsiz / maddi olmayan
immeasurable|ölçülemez
immutable|değişmez
impeccable|kusursuz / hatasız
impecunious|parasız / yoksul
impenetrable|geçilmez / anlaşılmaz
imperious|buyurgan / kibirli
impertinent|küstah / saygısız
imperturbable|soğukkanlı / sakin
impervious|etkilenmez / geçirmez
impetuous|aceleci / düşüncesiz
implacable|yatıştırılamaz / acımasız
implausible|akla yatkın olmayan
impolitic|tedbirsiz / yakışıksız
impregnable|ele geçirilemez / sağlam
impromptu|hazırlıksız / doğaçlama
imprudent|düşüncesiz / tedbirsiz
impulsive|dürtüsel / fevri
inadvertent|kasıtsız / dikkatsizce
inalienable|devredilemez / vazgeçilemez
inane|anlamsız / boş
incessant|aralıksız / sürekli
incipient|başlangıç halindeki
incisive|keskin / etkili
incongruous|uyumsuz / yersiz
inconsequential|önemsiz
incontrovertible|tartışılmaz / su götürmez
incorrigible|uslanmaz / düzelmez
indefatigable|yorulmaz / yılmaz
indelible|silinmez / unutulmaz
indignant|öfkeli / içerlemiş
indiscriminate|gelişigüzel / ayrım yapmayan
indolent|tembel / uyuşuk
indomitable|yenilmez / boyun eğmez
indubitable|şüphesiz / kesin
indulgent|hoşgörülü / düşkün
ineffable|tarif edilemez
inept|beceriksiz / yeteneksiz
inert|hareketsiz / tepkisiz
inexorable|amansız / durdurulamaz
inexplicable|açıklanamaz
infallible|yanılmaz / hatasız
infamous|kötü şöhretli
infernal|cehennem gibi / berbat
infinitesimal|sonsuz derecede küçük
infirm|zayıf / güçsüz (yaşlılıktan)
inflammatory|kışkırtıcı / iltihaplı
ingenious|dahi / yaratıcı
ingenuous|saf / içten
inimical|düşmanca / zararlı
iniquitous|adaletsiz / günahkar
innocuous|zararsız / masum
inordinate|aşırı / ölçüsüz
inquisitive|meraklı / sorgulayıcı
insatiable|doymak bilmez
inscrutable|esrarengiz / anlaşılmaz
insidious|sinsi
insipid|tatsız / yavan / sıkıcı
insolent|küstah / terbiyesiz
insoluble|çözülemez / erimez
insular|dar görüşlü / ada ile ilgili
insuperable|aşılamaz / yenilmez
intangible|soyut / dokunulmaz
interminable|bitmek bilmeyen
intermittent|aralıklı / kesintili
intractable|inatçı / çözülmesi zor
intransigent|uzlaşmaz / katı
intrepid|korkusuz / yiğit
intrinsic|asıl / içsel / özünde olan
inundated|boğulmuş / su altında kalmış
inveterate|müzmin / kökleşmiş
invidious|kıskançlık uyandıran / haksız
invincible|yenilmez
inviolable|dokunulmaz / bozulmaz
irascible|çabuk öfkelenen / huysuz
irate|çok öfkeli
irreconcilable|uzlaştırılamaz
irrefutable|çürütülemez
irreparable|telafisi imkansız
irrepressible|bastırılamaz / dizginlenemez
irreproachable|kusursuz / ayıplanamaz
irrevocable|geri alınamaz / kesin
itinerant|gezici / seyyar
jaded|bıkkın / yorgun
jocular|şakacı / neşeli
jovial|neşeli / şen
judicious|sağduyulu / akıllıca
labyrinthine|labirent gibi / karmaşık
laconic|az ve öz konuşan
languid|uyuşuk / halsiz
latent|gizli / uyuyan
laudable|övgüye değer
lax|gevşek / dikkatsiz
lethargic|uyuşuk / tembel
levity|ciddiyetsizlik / hafiflik
licentious|ahlaksız / sefih
limpid|berrak / duru
listless|isteksiz / halsiz
livid|öfkeden kudurmuş / mosmor
loathsome|iğrenç / tiksindirici
loquacious|geveze / konuşkan
lucid|açık / berrak / aklı başında
ludicrous|gülünç / saçma
lugubrious|kasvetli / kederli
luminous|ışıklı / parlak
lurid|korkunç / sansasyonel
lustrous|parlak / ışıltılı
macabre|ürkütücü / ölümle ilgili
magnanimous|yüce gönüllü / cömert
malevolent|kötü niyetli / kindar
malleable|şekil verilebilir / uysal
manifold|çeşitli / çok yönlü
martial|askeri / savaşçı
mawkish|aşırı duygusal / sulugöz
meager|yetersiz / kıt
mellifluous|tatlı / akıcı (ses)
mendacious|yalancı / sahtekar
mercenary|paragöz / paralı asker
mercurial|değişken / hareketli
meritorious|takdire şayan
meticulous|çok titiz / kılı kırk yaran
minuscule|ufacık / minicik
mirthful|neşeli / şen
misanthropic|insanlardan nefret eden
mitigating|hafifletici
modicum|az miktar
morbid|hastalıklı / marazi
mordant|iğneleyici / yakıcı
morose|somurtkan / asık suratlı
multifaceted|çok yönlü
mundane|sıradan / dünyevi
munificent|çok cömert
myopic|miyop / dar görüşlü
nascent|yeni doğan / gelişmekte olan
nefarious|alçak / kötü niyetli
nebulous|belirsiz / bulanık
negligible|önemsiz / ihmal edilebilir
nonchalant|kaygısız / aldırmaz
nondescript|sıradan / özelliği olmayan
nostalgic|nostaljik
noxious|zararlı / zehirli
obdurate|inatçı / katı kalpli
obsequious|dalkavuk / yaltaklanan
obstinate|inatçı / dik başlı
obtrusive|göze batan / rahatsız edici
obtuse|kalın kafalı / geniş açılı
odious|iğrenç / nefret uyandıran
officious|her şeye burnunu sokan
omniscient|her şeyi bilen
onerous|külfetli / zahmetli
opaque|opak / saydam olmayan / anlaşılmaz
opulent|zengin / görkemli
ornate|süslü / şatafatlı
ostentatious|gösterişçi
overbearing|baskıcı / kibirli
overt|açık / aleni
palatable|lezzetli / kabul edilebilir
pallid|solgun / benzi atmış
palpable|elle tutulur / aşikar
panoramic|panoramik / geniş manzaralı
parochial|dar görüşlü / yerel
parsimonious|cimri / eli sıkı
pathological|patolojik / hastalıklı
paucity|azlık / kıtlık
pedantic|bilgiçlik taslayan
pejorative|küçültücü / aşağılayıcı
pellucid|berrak / anlaşılır
penitent|pişman / tövbekar
pensive|düşünceli / dalgın
peremptory|kesin / buyurgan
perennial|sürekli / çok yıllık
perfidious|hain / sadakatsiz
perfunctory|üstünkörü / baştan savma
peripheral|ikincil / çevresel
pernicious|zararlı / yıkıcı
perspicacious|kavrayışlı / keskin zekalı
pertinent|ilgili / yerinde
pervasive|yaygın / her yere sinen
petulant|huysuz / alıngan
philanthropic|hayırsever
phlegmatic|soğukkanlı / sakin
pithy|özlü / kısa ve anlamlı
placid|sakin / dingin
plaintive|hüzünlü / acıklı
platonic|platonik
plethora|bolluk / aşırılık
pliable|esnek / kolay etkilenen
poignant|dokunaklı / acıklı
polemical|tartışmacı
ponderous|ağır / hantal / sıkıcı
portentous|uğursuz / şatafatlı
posthumous|ölümünden sonra gerçekleşen
precipitous|çok dik / aceleci
precocious|erken gelişmiş
predatory|yırtıcı
preeminent|üstün / seçkin
preposterous|saçma / akıl almaz
presumptuous|küstah / haddini bilmez
pretentious|gösterişçi / iddialı
prevalent|yaygın / hakim
prodigal|savurgan / müsrif
prodigious|muazzam / olağanüstü
profligate|savurgan / sefih
profuse|bol / çok
prolific|üretken / verimli
propitious|elverişli / uygun
prosaic|sıradan / yavan
protean|değişken / çok yönlü
providential|tanrı vergisi / şanslı
provincial|taşralı / dar görüşlü
prurient|şehvet düşkünü
puerile|çocuksu / olgunlaşmamış
pugnacious|kavgacı
punctilious|titiz / kuralcı
pungent|keskin (koku/tat) / iğneleyici
punitive|cezalandırıcı
pusillanimous|korkak / yüreksiz
quaint|tuhaf ama hoş / eski moda
querulous|sızlanan / huysuz
quixotic|hayalperest / gerçekçi olmayan
rampant|azgın / yaygın / kontrolsüz
rancorous|kindar / öfkeli
rapacious|açgözlü / yırtıcı
raucous|boğuk / gürültülü
recalcitrant|dik başlı / itaatsiz
reclusive|münzevi / insanlardan kaçan
recondite|anlaşılması güç / gizli
redoubtable|korkulan / saygı uyandıran
refractory|inatçı / tedaviye dirençli
regal|kraliyete yakışır / görkemli
remedial|iyileştirici / telafi edici
remiss|ihmalkar / dikkatsiz
remorseful|pişman
reprehensible|kınanacak / ayıplanacak
reproachful|sitemkar
reprobate|ahlaksız / yoldan çıkmış
repugnant|iğrenç / tiksindirici
requisite|gerekli / şart
resplendent|parlak / göz kamaştırıcı
reticent|ketum / az konuşan
reverent|saygılı / hürmetkar
ribald|kaba / müstehcen
rife|yaygın / dolu
rudimentary|ilkel / temel
rueful|pişman / kederli
ruminative|düşünceli / dalgın
rustic|kırsal / sade
sacrilegious|dine saygısız
sagacious|bilge / akıllı
salient|göze çarpan / en önemli
salubrious|sağlıklı / şifalı
salutary|faydalı / yararlı
sanctimonious|ikiyüzlü dindar
sanguine|iyimser / umutlu
sardonic|alaycı / küçümseyici
scathing|sert / acımasız (eleştiri)
scintillating|parlak / zekice
scrupulous|titiz / vicdanlı
scurrilous|kaba / iftira niteliğinde
sedentary|oturarak yapılan / hareketsiz
seditious|kışkırtıcı / isyankar
seminal|çığır açan / ufuk açıcı
sententious|ahlak dersi veren / özlü
serene|sakin / huzurlu
servile|köle ruhlu / dalkavuk
sinister|uğursuz / kötü niyetli
sluggish|uyuşuk / yavaş
solicitous|ilgili / endişeli
somber|kasvetli / ağırbaşlı
sonorous|gür / yankılanan (ses)
sordid|pis / aşağılık
spurious|sahte / uydurma
squalid|sefil / pis
staid|ağırbaşlı / ciddi
stalwart|sadık / güçlü / cesur
stentorian|çok gür (ses)
stoic|metanetli / acıya dayanıklı
strident|tiz / kulak tırmalayıcı
stringent|sıkı / katı (kural)
stupendous|muazzam / şaşırtıcı
suave|kibar / görmüş geçirmiş
subversive|yıkıcı / düzen karşıtı
succinct|kısa ve öz
sullen|somurtkan / küskün
sumptuous|görkemli / lüks
supercilious|kibirli / tepeden bakan
superfluous|gereksiz / fazla
surreptitious|gizli / el altından
sycophantic|dalkavuk / yaltaklanan
tacit|üstü kapalı / söylenmeden anlaşılan
taciturn|az konuşan / suskun
tangential|konuyla az ilgili / teğet
tantamount|eşdeğer / aynı anlama gelen
tawdry|ucuz ve gösterişli / bayağı
temerity|cüret / pervasızlık
tenacious|azimli / tuttuğunu koparan
tenuous|zayıf / ince / belirsiz
tepid|ılık / isteksiz
terse|kısa ve sert
timorous|korkak / çekingen
torpid|uyuşuk / hareketsiz
tortuous|dolambaçlı / karmaşık
tractable|uysal / kolay yönetilen
transient|geçici / kısa süreli
transitory|geçici / fani
treacherous|hain / tehlikeli
tremulous|titrek / ürkek
trenchant|keskin / etkili
trite|basmakalıp / sıradan
truculent|kavgacı / saldırgan
tumultuous|gürültülü / çalkantılı
turgid|şişkin / ağdalı (dil)
ubiquitous|her yerde bulunan
umbrage|gücenme / alınganlık
unassailable|çürütülemez / ele geçirilemez
uncanny|esrarengiz / olağanüstü
unctuous|yapmacık / yağcı
unequivocal|açık / kesin / su götürmez
unfettered|özgür / kısıtlanmamış
ungainly|hantal / sakar
unimpeachable|kusursuz / güvenilir
unmitigated|tam / katıksız (felaket vb.)
unobtrusive|göze batmayan / mütevazı
unscrupulous|vicdansız / ilkesiz
unseemly|yakışıksız / uygunsuz
untenable|savunulamaz / dayanaksız
untoward|ters / yakışıksız
unwieldy|hantal / kullanışsız
urbane|kibar / şehirli / nazik
vacuous|boş / anlamsız
vapid|sıkıcı / yavan / ruhsuz
vehement|şiddetli / ateşli
venal|satılık / rüşvetçi
venerable|saygıdeğer / muhterem
veracious|doğru sözlü / dürüst
verbose|gereksiz uzun / laf kalabalığı
verdant|yemyeşil
vestigial|kalıntı halinde olan
vicarious|dolaylı / başkasının yerine hissedilen
vigilant|tetikte / uyanık
vindictive|kindar / intikamcı
virulent|zehirli / şiddetli / düşmanca
visceral|içgüdüsel / derinden hissedilen
vituperative|ağır hakaret içeren
vivacious|canlı / hayat dolu
vociferous|yaygaracı / gürültücü
voluble|akıcı ve çok konuşan
voracious|obur / doymak bilmez
wan|solgun / bitkin
wanton|nedensiz / zalimce / azgın
whimsical|kaprisli / tuhaf ama hoş
winsome|çekici / sevimli
wistful|hüzünlü / özlem dolu
zenith|zirve / doruk noktası
albeit|gerçi / ...olsa bile
hitherto|şimdiye kadar
inasmuch as|...dığı için / mademki
insofar as|...dığı ölçüde
irrespective of|...e bakılmaksızın
notwithstanding|...e rağmen
thereby|bu sayede / böylece
wherein|ki orada / içinde
whereby|ki onunla / vasıtasıyla
abundantly|bolca
acutely|şiddetle / derinden
adamantly|kararlılıkla / inatla
adroitly|ustalıkla
adversely|olumsuz yönde
aesthetically|estetik açıdan
affably|güler yüzle
alarmingly|endişe verici şekilde
ambiguously|belirsiz bir şekilde
amicably|dostça
analogously|benzer şekilde
anonymously|isimsiz olarak
apologetically|özür dilercesine
ardently|tutkuyla / hararetle
arduously|zahmetle
arrogantly|kibirle
articulately|açık ve anlaşılır şekilde
assiduously|özenle / çalışkanlıkla
astutely|zekice / kurnazca
atrociously|berbat bir şekilde
audaciously|cüretkarca
auspiciously|hayırlı bir şekilde
authentically|özgün bir şekilde
authoritatively|otoriter bir şekilde
avidly|hevesle / iştahla
benevolently|iyilikseverlikle
blatantly|apaçık / göz göre göre
blissfully|mutlulukla
boisterously|gürültülü bir şekilde
brazenly|utanmazca
briskly|canlı ve hızlı bir şekilde
brutally|acımasızca
callously|duygusuzca
candidly|açık sözlülükle / samimiyetle
capriciously|kaprisli bir şekilde
catastrophically|felaket derecesinde
caustically|iğneleyici bir şekilde
charismatically|karizmatik bir şekilde
chronically|kronik olarak
clandestinely|gizlice
cogently|ikna edici şekilde
coherently|tutarlı bir şekilde
cohesively|bütünlük içinde
colossally|muazzam derecede
compatibly|uyumlu bir şekilde
complacently|halinden memnun bir şekilde
comprehensively|kapsamlı bir şekilde
compulsively|takıntılı bir şekilde
concisely|kısa ve öz olarak
conclusively|kesin olarak
concurrently|eşzamanlı olarak
condescendingly|tepeden bakarak
confidentially|gizlice / mahrem olarak
conscientiously|vicdanlı bir şekilde
consecutively|art arda
conservatively|muhafazakar bir şekilde / ihtiyatlıca
conspicuously|göze çarpacak şekilde
constructively|yapıcı bir şekilde
contemptuously|küçümseyerek
contentiously|tartışmalı bir şekilde
contingently|koşula bağlı olarak
contradictorily|çelişkili bir şekilde
controversially|tartışmalı bir şekilde
conventionally|geleneksel olarak
copiously|bolca
cordially|samimiyetle / içtenlikle
courageously|cesurca
courteously|nazikçe
covertly|gizlice / örtülü olarak
credibly|inanılır bir şekilde
critically|eleştirel / kritik olarak
cryptically|gizemli bir şekilde
cumulatively|birikimli olarak
cursorily|üstünkörü
cynically|alaycı bir şekilde
dauntingly|göz korkutucu şekilde
deceptively|aldatıcı bir şekilde
decisively|kararlılıkla / kesin olarak
decorously|edepli bir şekilde
defiantly|meydan okuyarak
definitively|kesin olarak
deftly|ustalıkla / çevikçe
delicately|nazikçe / hassasiyetle
demonstrably|kanıtlanabilir şekilde
deplorably|acınacak halde
derisively|alay ederek
desolately|ıssız / kederli bir şekilde
detrimentally|zarar verecek şekilde
devoutly|dindarca / içtenlikle
didactically|öğretici bir şekilde
diligently|özenle / çalışkanlıkla
diplomatically|diplomatik bir şekilde
discreetly|sağduyuyla / gizlice
disdainfully|küçümseyerek
disingenuously|samimiyetsizce
dismally|kasvetli / berbat bir şekilde
dispassionately|tarafsızca / soğukkanlılıkla
disruptively|düzeni bozacak şekilde
distinctively|ayırt edici şekilde
dogmatically|dogmatik bir şekilde
dramatically|çarpıcı ölçüde
dubiously|şüpheli bir şekilde
dynamically|dinamik bir şekilde
earnestly|ciddiyetle / içtenlikle
eccentrically|tuhaf bir şekilde
ecologically|ekolojik olarak
effortlessly|zahmetsizce
egregiously|korkunç derecede
elegantly|zarifçe
eloquently|güzel ve etkili konuşarak
eminently|son derece / fevkalade
empathetically|empati kurarak
emphatically|vurgulayarak / kesinlikle
empirically|deneysel olarak
enigmatically|gizemli bir şekilde
enthusiastically|coşkuyla
equitably|adilce
erratically|düzensiz bir şekilde
eruditely|bilgili bir şekilde
ethically|etik olarak
euphemistically|örtmeceli bir şekilde
evasively|kaçamak bir şekilde
exorbitantly|fahiş derecede
expeditiously|hızlı ve verimli şekilde
exponentially|katlanarak / üstel olarak
exquisitely|enfes bir şekilde
extravagantly|savurganca / abartılı şekilde
facetiously|şakacı bir tavırla
fallaciously|yanıltıcı bir şekilde
fastidiously|titizlikle
fatally|ölümcül derecede
favorably|olumlu şekilde
feasibly|uygulanabilir şekilde
fervently|hararetle / tutkuyla
flagrantly|apaçık / göz göre göre
flamboyantly|gösterişli bir şekilde
flawlessly|kusursuzca
fleetingly|kısa süreliğine
flippantly|ciddiyetsizce
fluently|akıcı bir şekilde
forcibly|zorla
formidably|müthiş derecede
forthrightly|açık sözlülükle
fortuitously|tesadüfen / şans eseri
frantically|çılgınca / telaşla
fraudulently|hileli bir şekilde
frugally|tutumlu bir şekilde
furtively|gizlice / sinsice
futilely|boşuna
gallantly|yiğitçe / centilmence
garrulously|gevezelikle
genially|cana yakınlıkla
glibly|akıcı ama yüzeysel şekilde
gracefully|zarafetle
graciously|lütufla / nazikçe
grandiosely|görkemli bir şekilde
gratuitously|sebepsiz yere
gregariously|sosyal bir şekilde
grievously|ağır bir şekilde
grimly|acımasızca / kasvetle
grudgingly|istemeye istemeye
gullibly|saflıkla
haphazardly|gelişigüzel
harshly|sertçe
hastily|aceleyle
haughtily|kibirle
hazardously|tehlikeli bir şekilde
heatedly|hararetle
heinously|iğrenç bir şekilde
heretically|aykırı bir şekilde
hesitantly|tereddütle
hilariously|çok komik bir şekilde
horribly|korkunç derecede
hostilely|düşmanca
humbly|alçakgönüllülükle
humorously|mizahi bir şekilde
hypocritically|ikiyüzlülükle
hypothetically|varsayımsal olarak
identically|tıpatıp aynı şekilde
ideologically|ideolojik olarak
idiosyncratically|kendine özgü biçimde
ignominiously|utanç verici şekilde
illegally|yasadışı olarak
illicitly|yasadışı yollardan
immaculately|tertemiz / kusursuzca
imminently|her an / yakında
impartially|tarafsızca
impatiently|sabırsızca
impeccably|kusursuz bir şekilde
imperiously|buyurganca
impertinently|küstahça
impetuously|düşünmeden / aceleyle
implicitly|üstü kapalı olarak
imprudently|tedbirsizce
impulsively|dürtüsel olarak
inadvertently|yanlışlıkla / istemeden
incessantly|durmaksızın
incisively|keskin bir şekilde
incoherently|tutarsızca
incompetently|beceriksizce
incongruously|uyumsuz bir şekilde
incredibly|inanılmaz derecede
indefinitely|süresiz olarak
indifferently|kayıtsızca
indignantly|öfkeyle
indiscriminately|ayrım gözetmeksizin
indolently|tembelce
indubitably|şüphesiz
indulgently|hoşgörüyle
ineptly|beceriksizce
inexorably|durdurulamaz biçimde
inexplicably|açıklanamaz şekilde
infallibly|yanılmaz bir şekilde
infamously|kötü şöhretle
ingeniously|dahice
ingenuously|saflıkla / içtenlikle
inherently|doğası gereği
inimically|düşmanca
iniquitously|adaletsizce
innocently|masumca
innocuously|zararsızca
inordinately|aşırı derecede
inquisitively|merakla
insatiably|doymak bilmez şekilde
insidiously|sinsice
insolently|küstahça
instinctively|içgüdüsel olarak
intellectually|entelektüel açıdan
intermittently|aralıklı olarak
intimately|samimiyetle
intricately|karmaşık bir şekilde
intriguingly|ilgi çekici biçimde
intrinsically|özünde / aslen
intuitively|sezgisel olarak
invariably|değişmez biçimde / her zaman
invidiously|haksız yere
irascibly|huysuzca
irrationally|mantıksızca
irredeemably|kurtarılamaz şekilde
irreparably|telafisi imkansız şekilde
irresistibly|karşı konulmaz şekilde
irresponsibly|sorumsuzca
irreverently|saygısızca
irrevocably|geri dönülmez şekilde
jocularly|şakacı bir dille
jovially|neşeyle
judiciously|sağduyuyla
keenly|keskin / hevesle
laconically|kısa ve öz olarak
lamentably|esefle / üzücü şekilde
languidly|uyuşukça
lavishly|cömertçe / savurganca
legitimately|meşru bir şekilde
leniently|hoşgörüyle
lethargically|uyuşuk bir şekilde
liberally|bolca / özgürlükçü biçimde
listlessly|isteksizce
logically|mantıklı bir şekilde
lucidly|berrak bir şekilde
ludicrously|gülünç derecede
magnanimously|yüce gönüllülükle
magnificently|muhteşem bir şekilde
malevolently|kötü niyetle
maliciously|kötü niyetle
mandatorily|zorunlu olarak
manifestly|açıkça
mechanically|mekanik olarak
meticulously|titizlikle
mindfully|dikkatle / bilinçli olarak
miraculously|mucizevi bir şekilde
miserably|sefil bir şekilde
misleadingly|yanıltıcı biçimde
mockingly|alay ederek
modestly|alçakgönüllülükle
momentarily|bir anlığına
monotonously|tekdüze biçimde
monumentally|muazzam derecede
morbidly|hastalıklı bir şekilde
morosely|somurtkanlıkla
mysteriously|gizemli bir şekilde
naively|safça
nefariously|alçakça
negligently|ihmalkarca
nervously|gergin bir şekilde
nobly|asilce
nonchalantly|aldırmaz bir tavırla
notoriously|kötü şöhretli olarak
noxiously|zararlı bir şekilde
obdurately|inatla
obnoxiously|iğrenç / sinir bozucu şekilde
obscurely|belirsizce
obsequiously|dalkavukça
obstinately|inatla
obtrusively|göze batarak
ominously|uğursuzca
onerously|zahmetle
opaquely|anlaşılmaz şekilde
optimistically|iyimserlikle
opulently|görkemli bir şekilde
ornately|süslü bir şekilde
ostentatiously|gösteriş yaparak
overtly|açıkça / alenen
painfully|acı verici şekilde
palpably|açıkça / hissedilir derecede
paradoxically|çelişkili bir şekilde
parsimoniously|cimrice
passionately|tutkuyla
pathetically|acınacak halde
patiently|sabırla
peacefully|huzurla
pedantically|bilgiçlik taslayarak
pejoratively|aşağılayıcı bir şekilde
pensively|düşünceli bir şekilde
peremptorily|kesin bir dille
perennially|sürekli olarak
perfidiously|haince
perfunctorily|üstünkörü
perilously|tehlikeli bir şekilde
perniciously|yıkıcı bir şekilde
persistently|ısrarla
persuasively|ikna edici şekilde
pertinently|yerinde bir şekilde
pervasively|yaygın olarak
pessimistically|kötümserlikle
petulantly|huysuzca
philosophically|felsefi olarak
placidly|sakinlikle
plausibly|makul bir şekilde
playfully|oyuncu bir tavırla
poignantly|dokunaklı bir şekilde
politely|kibarca
pompously|kendini beğenmişlik taslayarak
ponderously|ağır ve hantalca
pragmatically|gerçekçi bir şekilde
precariously|tehlikeli / belirsiz şekilde
precipitously|dik bir şekilde / aceleyle
precociously|erken gelişmişlik göstererek
prematurely|vaktinden önce
presumptuously|küstahça
pretentiously|gösteriş yaparak
prodigiously|olağanüstü derecede
productively|verimli bir şekilde
profanely|saygısızca
profoundly|derinden / son derece
profusely|bolca
prohibitively|engelleyici derecede (pahalı)
prolifically|üretken bir şekilde
prominently|önde gelen biçimde
promisingly|umut verici şekilde
propitiously|elverişli bir şekilde
proudly|gururla
providentially|şans eseri
provocatively|kışkırtıcı bir şekilde
prudently|tedbirli bir şekilde
psychologically|psikolojik olarak
pugnaciously|kavgacı bir şekilde
punctiliously|titizlikle
punctually|tam vaktinde
punitively|cezalandırıcı biçimde
quaintly|tuhaf ama hoş bir şekilde
querulously|sızlanarak
quixotically|hayalperestçe
rancorously|kinle
rapaciously|açgözlülükle
rationally|akılcı bir şekilde
raucously|gürültüyle
rebelliously|asi bir tavırla
recklessly|pervasızca
regally|görkemli bir şekilde
regretfully|pişmanlıkla
relentlessly|amansızca / durmaksızın
remorsefully|pişmanlıkla
reprehensibly|kınanacak şekilde
reproachfully|sitemle
repugnantly|iğrenç bir şekilde
resolutely|kararlılıkla
resourcefully|beceriklilikle
respectfully|saygıyla
restlessly|huzursuzca
reticently|ketum bir şekilde
reverently|hürmetle
righteously|haklı olarak / dürüstçe
rigidly|katı bir şekilde
rigorously|titizlikle
robustly|sağlam bir şekilde
romantically|romantik bir şekilde
rudely|kabaca
ruefully|üzüntüyle / pişmanlıkla
ruthlessly|acımasızca
sacredly|kutsal bir şekilde
sadistically|sadistçe
sagaciously|bilgelikle
sanctimoniously|ikiyüzlü bir dindarlıkla
sardonically|alaycı bir şekilde
savagely|vahşice
scathingly|acımasızca eleştirerek
scrupulously|kılı kırk yararak
secretively|gizlice
seductively|baştan çıkarıcı şekilde
selectively|seçici olarak
selfishly|bencilce
sensationalistically|sansasyonel biçimde
sensibly|mantıklıca
sensitively|hassasiyetle
serenely|sakinlikle / huzurla
servilely|kölece / yaltaklanarak
shabbily|yıpranmış / yakışıksız şekilde
shamefully|utanç verici şekilde
shamelessly|utanmadan
shrewdly|kurnazca / zekice
shyly|utangaçça
silently|sessizce
sinisterly|uğursuzca
skeptically|şüpheyle
skillfully|ustalıkla
sluggishly|uyuşukça
slyly|kurnazca / sinsice
smugly|kendini beğenmişlik taslayarak
soberly|ağırbaşlılıkla
solemnly|ciddiyetle
solitarily|tek başına
somberly|kasvetle
soothingly|yatıştırıcı bir şekilde
sordidly|aşağılık bir şekilde
spaciously|ferah bir şekilde
sparingly|idareli bir şekilde / az
spasmodically|aralıklı / kasılmalı olarak
spectacularly|görkemli bir şekilde
spitefully|kinle / nispet yapar gibi
splendidly|muhteşem bir şekilde
spontaneously|kendiliğinden
sporadically|ara sıra
spuriously|sahte bir şekilde
stagnantly|durgun bir şekilde
staunchly|sadakatle / kararlılıkla
stealthily|gizlice / sessizce
sternly|sert bir şekilde
stoically|metanetle
strenuously|yorucu bir şekilde / gayretle
stridently|tiz bir sesle
stringently|sıkı bir şekilde
stubbornly|inatla
studiously|özenle / çalışkanlıkla
stunningly|göz kamaştırıcı şekilde
suavely|kibarca
subjectively|öznel olarak
submissively|boyun eğerek
subversively|yıkıcı bir şekilde
succinctly|kısa ve öz olarak
sullenly|somurtarak
sumptuously|görkemli bir şekilde
superciliously|kibirle
superficially|yüzeysel olarak
superfluously|gereksiz yere
surreptitiously|el altından / gizlice
suspiciously|şüpheyle
sycophantically|dalkavukluk ederek
symbolically|sembolik olarak
sympathetically|anlayışla
systematically|sistematik olarak
tacitly|üstü kapalı olarak
taciturnly|suskunlukla
tactfully|nezaketle
tangibly|somut olarak
tediously|sıkıcı bir şekilde
temerariously|pervasızca
tenaciously|azimle
tentatively|çekinerek / geçici olarak
tersely|kısa ve sertçe
thankfully|minnettarlıkla / şükür ki
theoretically|teorik olarak
thoughtfully|düşünceli bir şekilde
timidly|çekingenlikle
tolerantly|hoşgörüyle
torpidly|uyuşukça
tortuously|dolambaçlı bir şekilde
tragically|trajik bir şekilde
tranquilly|huzurla
transparently|şeffaf bir şekilde
treacherously|haince
tremulously|titreyerek
trenchantly|keskin bir şekilde
triumphantly|zafer kazanmışçasına
trivially|önemsiz şekilde
truculently|kavgacı bir tavırla
tumultuously|çalkantılı bir şekilde
turbulently|fırtınalı / çalkantılı şekilde
tyrannically|zorbalıkla
ubiquitously|her yerde bulunarak
unapologetically|özür dilemeden / pervasızca
unashamedly|utanmadan
unassumingly|alçakgönüllülükle
unavoidably|kaçınılmaz olarak
unconditionally|koşulsuz şartsız
unconsciously|bilinçsizce
uncontrollably|kontrolsüzce
unconventionally|alışılmışın dışında
undeniably|inkar edilemez biçimde
understandably|anlaşılır bir şekilde
uneasily|huzursuzca
unequivocally|açık ve kesin olarak
unerringly|şaşmaz bir şekilde
unfailingly|kesintisiz / şaşmadan
unfavorably|olumsuz olarak
unflinchingly|gözünü kırpmadan
ungratefully|nankörce
unhappily|mutsuzca
uniformly|tek tip olarak
unilaterally|tek taraflı olarak
unintentionally|istemeden / kasıtsızca
uniquely|benzersiz bir şekilde
unjustly|haksız yere
unknowingly|bilmeden
unlawfully|yasadışı olarak
unmistakably|açıkça / kesinlikle
unnaturally|doğal olmayan şekilde
unnecessarily|gereksiz yere
unobtrusively|göze batmadan
unofficially|gayriresmi olarak
unpredictably|tahmin edilemez şekilde
unquestionably|tartışmasız biçimde
unrealistically|gerçekçi olmayan şekilde
unreasonably|mantıksızca
unrelentingly|amansızca
unreliably|güvenilmez şekilde
unreservedly|çekinmeden / tamamen
unscrupulously|vicdansızca
unselfishly|bencil olmadan
unsteadily|dengesizce
unsuccessfully|başarısız bir şekilde
unthinkingly|düşünmeden
unusually|alışılmadık biçimde
unwillingly|istemeyerek
unwisely|akılsızca
upwardly|yukarı doğru
urbanely|kibarca
vacuously|boş boş
vainly|boşuna / kibirle
validly|geçerli bir şekilde
vehemently|şiddetle
venally|rüşvetle
venerably|saygıyla
veraciously|dürüstçe
verbosely|uzun uzadıya
vigorously|dinç bir şekilde / gayretle
vindictively|kindarca
violently|şiddetle
virtuously|erdemli bir şekilde
viscerally|derinden / içgüdüsel olarak
vitally|hayati derecede
vividly|canlı bir şekilde
vociferously|yaygara kopararak
voluntarily|gönüllü olarak
voraciously|oburca / büyük bir iştahla
vulgarly|kabaca
vulnerably|savunmasız bir şekilde
wantonly|zalimce / sebepsiz yere
warmly|sıcaklıkla / içtenlikle
warily|tedbirle
wearily|yorgun argın
whimsically|tuhaf bir şekilde
wholeheartedly|tüm kalbiyle
wickedly|kötülükle
wildly|çılgınca / vahşice
wistfully|hüzünle / özlemle
wittily|esprili bir şekilde
woefully|acınacak derecede
wonderfully|harika bir şekilde
wretchedly|sefil bir şekilde
zealously|gayretle / şevkle

`},
{id:"C1",text:`
aberration|sapma / anormallik
abnegation|feragat / kendini inkar etme
absolutism|mutlakiyetçilik
acumen|keskin zeka / kavrayış yeteneği
admonition|uyarı / ihtar
aesthetics|estetik bilimi
agnosticism|bilinemezcilik / agnostisizm
alacrity|heves / isteklilik / çabukluk
altruism|özgecilik / diğerkamlık
amalgamation|birleşme / kaynaşma
anachronism|tarih yanılgısı / çağ dışılık
animosity|düşmanlık / husumet
antecedent|öncül / geçmiş olay
anthropocentrism|insan merkezcilik
aphorism|özdeyiş / vecize
apogee|doruk noktası / zirve
apotheosis|tanrılaştırma / en mükemmel örnek
appellation|unvan / adlandırma
approbation|onay / takdir
asceticism|çilecilik / züht
asperity|sertlik / huysuzluk
assiduity|sebat / aşırı özen
atavism|ataya çekme / ilkel özelliklerin dönüşü
attenuation|zayıflama / incelme
augury|kehanet / alamet
auspices|himaye / destek / gözetim
avarice|açgözlülük / tamahkarlık
banality|bayağılık / sıradanlık
beatitude|mutluluk / kutluluk
bellicosity|savaşçılık / kavgacılık
benediction|kutsama / hayır duası
bifurcation|ikiye ayrılma / çatallanma
blandishment|tatlı söz / pohpohlama
blasphemy|dine küfür / kutsal değerlere saygısızlık
bombast|abartılı ve boş söz
camaraderie|yoldaşlık / samimi arkadaşlık
candor|açık sözlülük / samimiyet
caprice|kapris / ani fikir değişikliği
casuistry|safsata / kelime oyunu
catharsis|arınma / duygusal boşalım
chicanery|hilekarlık / ayak oyunu
circumlocution|dolambaçlı konuşma
clairvoyance|durugörü / geleceği görme
clemency|merhamet / bağışlama
cogency|ikna edicilik / mantıksal güç
cognizance|farkındalık / bilgi sahibi olma
commensurability|ölçülebilirlik / orantılılık
compendium|özet / derleme eser
complacency|kayıtsızlık / halinden aşırı memnuniyet
compunction|vicdan azabı / pişmanlık
concatenation|zincirleme / birbirine bağlanma
concomitant|eşlik eden durum / yan etki
concord|uyum / ahenk / antlaşma
condescension|tepeden bakma / küçümseme
conflagration|büyük yangın / çatışma
confluence|birleşme noktası / kavşak
conjecture|tahmin / varsayım
connotation|yan anlam / çağrışım
consternation|dehşet / şaşkınlık
consummation|tamamlama / kemal
contiguity|bitişiklik / komşuluk
contrition|pişmanlık / nedamet
conundrum|bilmece / içinden çıkılmaz sorun
convexity|dışbükeylik
corollary|doğal sonuç / mantıksal çıkarım
cosmopolitanism|dünya vatandaşlığı / kozmopolitlik
cupidity|açgözlülük / tamah
dearth|kıtlık / azlık
debacle|hezimet / tam başarısızlık
decorum|görgü kuralları / edep
deference|saygı / hürmet
delectation|zevk / haz
delineation|tasvir / sınırlarını çizme
demagoguery|demagoji / halk avcılığı
denigration|karalama / kötüleme
denotation|düz anlam / işaret etme
depravity|ahlaki çöküntü / sapkınlık
derision|alay / küçümseme
desiccation|kuruma / nemsiz kalma
despondency|umutsuzluk / karamsarlık
destitution|sefalet / aşırı yoksulluk
desuetude|kullanımdan kalkma / unutulma
dichotomy|ikilik / ikiye bölünme
diffidence|özgüven eksikliği / çekingenlik
dilettantism|amatörlük / yüzeysel ilgi
diminution|azalma / eksilme
dirge|ağıt / cenaze marşı
disapprobation|onaylamama / kınama
discernment|sağduyu / ayırt etme yeteneği
discomfiture|mahcubiyet / bozguna uğrama
discord|anlaşmazlık / uyumsuzluk
disdain|küçümseme / hor görme
disingenuousness|samimiyetsizlik / ikiyüzlülük
disparagement|küçümseme / aşağılama
disparity|eşitsizlik / farklılık
disquisition|uzun ve ayrıntılı inceleme
dissension|fikir ayrılığı / nifak
dissimulation|ikiyüzlülük / gizleme
dissonance|uyumsuzluk / kakofoni
divination|kehanet / falcılık
docility|uysallık / yumuşak başlılık
dogmatism|dogmatizm / sabit fikirlilik
duplicity|ikiyüzlülük / sahtekarlık
ebullience|coşkunluk / taşkınlık
eclecticism|seçmecilik / eklektizm
edification|ahlaki ve zihinsel gelişim
effrontery|küstahtık / yüzsüzlük
egalitarianism|eşitlikçilik
egotism|bencillik / kendini beğenmişlik
elation|büyük sevinç / coşku
elucidation|açıklama / aydınlatma
emanation|yayılma / sadır olma
embellishment|süsleme / abartma
empiricism|deneycilik / ampirizm
encomium|övgü / methiye
enigma|muamma / bilmece
ennui|can sıkıntısı / bezginlik
epiphany|ani kavrayış / aydınlanma anı
epistemology|bilgi felsefesi / epistemoloji
equanimity|soğukkanlılık / ruh dinginliği
equipoise|denge / muadele
equivocation|kaçamak konuşma / iki anlamlılık
erudition|derin bilgi / alimlik
eschatology|ahiret bilimi / kıyamet öğretisi
estrangement|yabancılaşma / soğuma
eulogy|övgü konuşması (özellikle cenazede)
evanescence|geçicilik / uçuculuk
exegesis|tefsir / metin yorumlama
exigency|acil ihtiyaç / zorunluluk
existentialism|varoluşçuluk
exoneration|aklama / temize çıkarma
expediency|çıkar / uygunluk
expiation|kefaret / günah ödeme
extrapolation|çıkarım / bilinenlerden hareketle tahmin
facetiousness|yüzeysel şakacılık
fastidiousness|aşırı titizlik
fatuousness|budalalık / ahmaklık
felicity|mutluluk / yerinde ifade
fervor|coşku / hararet
fidelity|sadakat / bağlılık
flippancy|ciddiyetsizlik / saygısızlık
forbearance|sabır / hoşgörü / kendini tutma
fortitude|metanet / cesaret
frivolity|ciddiyetsizlik / havailik
frugality|tutumluluk / idarelilik
garrulity|gevezelik
gentility|kibarlık / soyluluk
grandiloquence|ağdalı ve şatafatlı konuşma
gratification|tatmin / haz
gregariousness|sosyallik / topluluk sevme
guile|hile / kurnazlık
harangue|uzun ve sert söylev
hedonism|hazcılık / hedonizm
heresy|sapkınlık / aykırı görüş
heterogeneity|çeşitlilik / heterojenlik
hubris|aşırı kibir / haddini aşma
iconoclasm|put kırıcılık / gelenek yıkıcılık
idiosyncrasy|kendine özgü huy / tuhaflık
ignominy|rezalet / yüz karası
immanence|içkinlik
immutability|değişmezlik
impartiality|tarafsızlık / yansızlık
impediment|engel / mani
impertinence|küstahlık / saygısızlık
impetuosity|fevrilik / acelecilik
implacability|amansızlık / yatıştırılamazlık
imprecation|beddua / lanet
improvidence|tedbirsizlik / savurganlık
impudence|utanmazlık / küstahlık
inanition|bitkinlik / boşluk
incandescence|akkorluk / parlaklık
inception|başlangıç / kuruluş
incisiveness|keskinlik / etkililik
incongruity|uyumsuzluk / aykırılık
incredulity|inançsızlık / şüphecilik
indefatigability|yorulmazlık
indeterminacy|belirsizlik
indignation|öfke / içerleme
indolence|tembellik / uyuşukluk
ineffability|tarif edilemezlik
ineptitude|beceriksizlik / yeteneksizlik
inertia|atalet / eylemsizlik
inexorability|amansızlık / kaçınılmazlık
infallibility|yanılmazlık
infamy|kötü şöhret / rezillik
ingratiation|yaltaklanma / göze girme çabası
iniquity|adaletsizlik / kötülük
innuendo|ima / üstü kapalı dokundurma
inscrutability|esrarengizlik / anlaşılmazlık
insidiousness|sinsilik
insolence|küstahlık / terbiyesizlik
insouciance|kaygısızlık / umursamazlık
interlocutor|muhatap / konuşmacı
intimation|ima / bildirim
intransigence|uzlaşmazlık / katılık
intrepidity|korkusuzluk / yiğitlik
invective|ağır hakaret / sövgü
irascibility|çabuk öfkelenme / huysuzluk
irreverence|saygısızlık
juxtaposition|yan yana koyma / karşılaştırma
kudos|övgü / şeref / takdir
labyrinth|labirent / karmaşık yapı
laconicism|az ve öz konuşma
lassitude|halsizlik / bıkkınlık
licentiousness|ahlaksızlık / sefahat
loquacity|gevezelik / çok konuşkanlık
lucidity|berraklık / açıklık
lugubriousness|kasvet / keder
machination|entrika / gizli plan
magnanimity|yüce gönüllülük / cömertlik
malaise|huzursuzluk / genel kırıklık
malevolence|kötü niyet / kin
malfeasance|görevi kötüye kullanma / yolsuzluk
mendacity|yalancılık / sahtekarlık
meritocracy|liyakat düzeni
metamorphosis|başkalaşım / dönüşüm
metaphysics|metafizik / fizik ötesi
meticulousness|aşırı titizlik
misanthropy|insan düşmanlığı
misnomer|yanlış adlandırma
mollification|yatıştırma / yumuşatma
monomania|tek bir fikre saplanma
mores|örf ve adetler / toplumsal normlar
munificence|aşırı cömertlik
myopia|dar görüşlülük / miyopluk
nadir|en dip nokta / çöküş
nefariousness|alçaklık / kötülük
neologism|yeni türetilmiş kelime
nescience|bilgisizlik / cehalet
nihilism|hiççilik / nihilizm
nonchalance|aldırmazlık / soğukkanlılık
nonplus|şaşkınlık / ne yapacağını bilememe
obduracy|inatçılık / katı kalplilik
obfuscation|kafa karıştırma / gizleme
obliquity|eğrilik / dolambaçlılık
obloquy|kınama / kötü şöhret
obsequiousness|dalkavukluk / yaltaklanma
obstinacy|inatçılık / dik başlılık
obtuseness|kalın kafalılık / anlayışsızlık
odium|nefret / tiksinti
officiousness|işgüzarlık / her şeye karışma
oligarchy|oligarşi / zümre yönetimi
omniscience|her şeyi bilme
ontology|varlık bilimi / ontoloji
opprobrium|rezalet / ağır kınama
opulence|zenginlik / ihtişam
ostentation|gösteriş / çalım
ostracism|dışlama / toplumdan tecrit
panacea|her derde deva ilaç / çare
panegyric|övgü söylevi / methiye
paradigm|paradigma / değerler dizisi
paragon|kusursuz örnek / timsal
parochialism|dar görüşlülük / yerellik
parsimony|aşırı cimrilik / tutumluluk
peccadillo|ufak kabahat / kusur
pedantry|bilgiçlik taslama
penchant|eğilim / düşkünlük
penury|aşırı yoksulluk / sefalet
perdurance|süreklilik / kalıcılık
perfidy|hainlik / ihanet
peripeteia|ani kader değişikliği
perspicacity|keskin zeka / kavrayış
pertinacity|inatçılık / azim
petulance|huysuzluk / alınganlık
philanthropy|hayırseverlik / insan sevgisi
philistinism|kültürsüzlük / sanata ilgisizlik
phlegm|soğukkanlılık / balgam
piety|dindarlık / hürmet
pique|gücenme / alınganlık
pith|öz / esas
platitude|basmakalıp söz / klişe
poignancy|dokunaklılık / acı vericilik
polemic|sert tartışma / polemik
polymath|hezarfen / çok yönlü bilgin
pomposity|kendini beğenmişlik / şatafat
portent|uğursuzluk alameti / işaret
posterity|gelecek nesiller
predilection|özel ilgi / yatkınlık
preeminence|üstünlük / seçkinlik
premonition|önsezi / içine doğma
preponderance|üstünlük / ağırlık
prescience|öngörü / geleceği bilme
presumption|küstahtık / varsayım
pretension|iddia / gösteriş
prevarication|kaçamak cevap / yalan söyleme
probity|dürüstlük / doğruluk
proclivity|eğilim / yatkınlık
prodigality|savurganlık / müsriflik
profligacy|sefihlik / aşırı savurganlık
profundity|derinlik / enginlik
prolixity|sözü uzatma / laf kalabalığı
propitiation|gönül alma / yatıştırma
propriety|uygunluk / görgü / edep
providence|ilahi takdir / basiret
prudence|sağduyu / ihtiyat
puissance|güç / kudret
punctiliousness|kuralcılık / aşırı titizlik
pusillanimity|korkaklık / yüreksizlik
quagmire|bataklık / içinden çıkılmaz durum
quandary|ikilem / kararsızlık
querulousness|sızlanma / huysuzluk
quiddity|öz / mahiyet
quiescence|sükunet / hareketsizlik
quintessence|öz / en saf örnek
raconteur|usta hikayeci / hoşsohbet kimse
rancor|kin / nefret
rapacity|açgözlülük / yırtıcılık
rapprochement|yakınlaşma / uzlaşma (devletler arası)
recalcitrance|dik başlılık / itaatsizlik
recidivism|suç tekrarlama eğilimi
recluse|münzevi / inzivaya çekilmiş kimse
rectitude|doğruluk / dürüstlük
rejoinder|hazırcevap / sert karşılık
remonstrance|itiraz / protesto
repartee|hazırcevaplık / nükte
repugnance|tiksinti / nefret
requiem|ağıt / ölü duası
resplendence|parıltı / görkem
reticence|ketumluk / suskunluk
reverence|derin saygı / hürmet
ribaldry|kaba şaka / müstehcenlik
rigmarole|saçma sapan uzun konuşma
sagacity|bilgelik / keskin zeka
salience|göze çarpma / önem
sangfroid|soğukkanlılık / sükunet
sanguinity|iyimserlik
sardonicism|acı alaycılık
schism|bölünme / ayrılık (mezhep/grup)
scintilla|zerre / kıvılcım
scruple|vicdan azabı / tereddüt
scurrility|kabalık / ağır hakaret
sedulity|çalışkanlık / gayret
semblance|görünüş / benzerlik
senescence|yaşlanma süreci
sententiousness|ahlak dersi verme eğilimi
serendipity|şans eseri güzel bir şey bulma
servility|kölelik / dalkavukluk
similitude|benzerlik / benzeşim
sinecure|zahmetsiz ve bol kazançlı iş
sobriety|ağırbaşlılık / ayıklık
solecism|dil hatası / görgüsüzlük
solipsism|tekbencilik
somnolence|uyku hali / mahmurluk
sophistry|safsata / kelime cambazlığı
sordidness|aşağılıklık / pislik
speciousness|aldatıcı görünüş
splenetic|huysuz / öfkeli
spuriousness|sahtelik / uydurmalık
staidness|ciddiyet / ağırbaşlılık
stoicism|metanet / stoacılık
stratagem|savaş hilesi / kurnaz plan
stricture|sert eleştiri / kısıtlama
stupor|uyuşukluk / şaşkınlık hali
subterfuge|kaçamak / hile / bahane
succinctness|özlülük / kısalık
superciliousness|kibir / tepeden bakma
superfluity|fazlalık / gereksizlik
supplication|yalvarma / yakarış
surfeit|aşırılık / tıka basa doyma
sybarite|sefa düşkünü / keyif ehli
sycophancy|dalkavukluk / yaltaklanma
syllogism|tasım / kıyas (mantık)
taciturnity|suskunluk / az konuşma
tenuousness|zayıflık / incelik
tergiversation|döneklik / kaçamak yapma
timorousness|korkaklık / çekingenlik
torpor|uyuşukluk / rehavet
tractability|uysallık / kolay yönetilme
transience|geçicilik / fanilik
trepidation|korku / endişe / titreme
truculence|kavgacılık / saldırganlık
tumult|kargaşa / gürültü
turgidity|şişkinlik / ağdalılık
turpitude|ahlaksızlık / alçaklık
ubiquity|her yerde bulunma
unction|yapmacık nezaket / yağcılık
upheaval|büyük karışıklık / altüst oluş
urbanity|nezaket / incelik
usurpation|gasp / zorla ele geçirme
uxoriousness|karısına aşırı düşkünlük
vacillation|kararsızlık / bocalama
vacuity|boşluk / anlamsızlık
vainglory|boş gurur / kibir
venality|satılmışlık / rüşvetçilik
veneration|saygı / tazim
veracity|doğruluk / gerçeklik
verbiage|laf kalabalığı
verisimilitude|gerçeğe benzerlik
vicissitude|iniş çıkış / talih değişikliği
vilification|karalama / kötüleme
vindication|aklanma / haklı çıkma
virulence|şiddet / zehirlilik / düşmanlık
vituperation|ağır hakaret / sövgü
volubility|akıcı ve çok konuşma
voracity|oburluk / doymak bilmezlik
wanderlust|seyahat tutkusu
whimsy|kapris / tuhaf heves
zeitgeist|zamanın ruhu
abeyance|askıda olma / geçici durdurma
abrogation|fesih / yürürlükten kaldırma
actuary|aktüer / sigorta matematikçisi
adjudication|yargılama / hüküm verme
agio|sarraflık ücreti / kambiyo farkı
amortize|itfa etmek / borcu taksitle ödemek
annuity|yıllık gelir / ömür boyu maaş
antitrust|tekelcilik karşıtı
appurtenance|eklenti / teferruat (hukuk)
arbitrage|arbitraj / fiyat farkından kar etme
arraignment|mahkemeye çıkarma / suçlama okuma
arrears|vadesi geçmiş borç / birikmiş ödeme
assize|ağır ceza mahkemesi
attainder|medeni haklardan mahrumiyet
bailiff|icra memuru / mübaşir
bequest|miras / vasiyet edilen mal
bicameral|iki meclisli
bill of lading|konşimento / yük senedi
bondholder|tahvil sahibi
bourgeoisie|burjuvazi / orta sınıf
brokerage|aracılık / komisyonculuk
capitalization|sermayelendirme
caveat|ihtirazi kayıt / uyarı
chancery|yüksek mahkeme / kançılarya
chattel|taşınır mal / menkul
clientele|müşteri kitlesi
codicil|vasiyetname eki
cognizable|yargı yetkisine giren
collusion|gizli anlaşma / danışıklı dövüş
commodification|metalaştırma
commutation|ceza indirimi / dönüştürme
comptroller|sayıştay denetçisi / mali kontrolör
conglomeration|şirketleşme / yığılma
consignment|konsinye satış / sevkiyat
conveyance|mülkiyet devri
covenant|ahitleşme / resmi sözleşme
debenture|tahvil / borç senedi
decertification|yetki belgesini iptal etme
defalcation|zimmete para geçirme
defamation|iftira / hakaret
demurrage|bekleme ücreti (gemide/limanda)
deposition|yeminli yazılı ifade
derogation|hak kısıtlaması / aykırılık
devolution|yetki devri (yerel yönetimlere)
disbursement|ödeme / harcama
disenfranchisement|oy hakkından mahrum bırakma
distraint|haciz
easement|irtifak hakkı (geçit hakkı vb.)
embezzlement|zimmete para geçirme
eminent domain|kamulaştırma yetkisi
encumbrance|ipotek / mülk üzerindeki yükümlülük
enfranchisement|oy hakkı verme
entailment|mülkün devrini kısıtlama
escheat|varissiz malın devlete kalması
escrow|emanet hesabı / yediemin
estoppel|hukuki engel / itiraz hakkının düşmesi
expropriation|kamulaştırma / el koyma
fiduciary|mutemet / güvene dayalı
foreclosure|ipotekli malın haczi
forfeiture|müsadere / hak kaybı
garnishment|maaş haczi
gerrymandering|seçim bölgelerini çıkar amaçlı bölme
habeas corpus|kişi özgürlüğü güvencesi
hedging|riskten korunma (finans)
hereditament|miras kalabilen mülk
hypothecation|ipotek etme
imprimatur|resmi onay / basım izni
indemnity|tazminat / güvence
indenture|çıraklık/hizmet sözleşmesi
interregnum|fetret devri
intestate|vasiyetsiz ölen
junta|cunta / askeri yönetim
jurisprudence|hukuk felsefesi / içtihat
kleptocracy|hırsızlar yönetimi / kleptokrasi
laissez-faire|bırakınız yapsınlar ekonomisi
larceny|hırsızlık
lien|rehin hakkı / haciz
litigant|davalı veya davacı
malversation|görevi kötüye kullanma / yolsuzluk
manumission|köle azadı
mercantilism|merkantalizm
misappropriation|zimmete geçirme / kötüye kullanma
monetarism|parasalcılık
mortgagee|ipotek alacaklısı
mortgagor|ipotek borçlusu
nonfeasance|görevi ihmal
novation|borcun yenilenmesi
ombudsman|kamu denetçisi
overdraft|kredili mevduat / hesap aşımı
peculation|kamu parasını çalma
plenary|tam yetkili / genel (oturum)
plutocracy|zenginler yönetimi / plütokrasi
plenipotentiary|tam yetkili elçi
primogeniture|ilk çocuğun miras hakkı
proletariat|proletarya / işçi sınıfı
promissory note|emre muharrer senet / bono
prorogation|meclisi tatil etme
quorum|toplantı yeter sayısı
receivership|kayyımlık / tasfiye memurluğu
recusal|hakimin davadan çekilmesi
remuneration|ücret / maaş / karşılık
reparation|savaş tazminatı
replevin|hacizli malı geri alma davası
res judicata|kesin hüküm
seigniorage|senyoraj / para basma geliri
sequestration|el koyma / yediemine verme
sine die|süresiz erteleme
sovereign wealth fund|ulusal varlık fonu
stagflation|stagflasyon / durgunluk içinde enflasyon
subrogation|halefiyet (hukuk)
sumptuary|lüks tüketimi kısıtlayan
surety|kefil / teminat
syndicalism|sendikacılık
tenancy|kiracılık
testator|vasiyet bırakan kimse
theocracy|teokrasi / din devleti
tort|haksız fiil
trusteeship|vesayet / mütevellilik
usufruct|intifa hakkı / yararlanma hakkı
usury|tefecilik
vicarious liability|dolaylı sorumluluk
writ|mahkeme emri / celp
ablation|aşınma / doku çıkarma
acidosis|asidoz / kan asitliği artışı
acoustics|akustik bilimi
adiabatic|ısı alışverişsiz (termodinamik)
aetiology|hastalık nedeni bilimi
agglutination|kümeleşme / yapışma
agnosia|algılayamama / agnozi
agoraphobia|alan korkusu
albedo|yansıtabilirlik (astronomi)
allopathy|klasik tıp tedavisi
allotropy|allotropi
amalgam|cıvalı alaşım / karışım
anabolism|yapım metabolizması
anaphylaxis|şiddetli alerjik şok
aneurysm|damar genişlemesi / anevrizma
angina|göğüs ağrısı / anjin
anorexia|iştahsızlık / anoreksiya
anthropometry|insan vücudu ölçümü
aphasia|söz yitimi / afazi
apnea|uyku apnesi / solunum durması
apoptosis|programlı hücre ölümü
arrhythmia|kalp ritim bozukluğu
arteriosclerosis|damar sertliği
asepsis|mikropsuzluk / asepsi
asphyxia|boğulma / havasız kalma
astigmatism|astigmatizm
ataxia|hareket koordinasyon bozukluğu
atherosclerosis|damar tıkanıklığı
atrophy|körelme / doku erimesi
auscultation|stetoskopla dinleme
autoimmune|otoimmün / bağışıklık sisteminin kendine saldırması
bacteriophage|bakteri yiyen virüs
bariatrics|obezite tıbbı
bioinformatics|biyoinformatik
bioluminescence|biyolüminesans / canlıların ışık yayması
biometrics|biyometri
bionics|biyonik
bradycardia|kalp atışının yavaşlaması
cachexia|aşırı zayıflama / erime
calcification|kireçlenme
capillary|kılcal damar
catabolism|yıkım metabolizması
catalysis|kataliz
cataract|katarakt
cathode|katot
cauterize|dağlamak (yara)
cerebellum|beyincik
cerebral|beyinle ilgili / zihinsel
chromatin|kromatin
chromosome|kromozom
circadian|günlük biyolojik ritimle ilgili
cirrhosis|siroz
claustrophobia|kapalı alan korkusu
coagulation|pıhtılaşma
colitis|kalın bağırsak iltihabı
conduction|iletim (ısı/elektrik)
convection|ısı yayımı / konveksiyon
convulsion|havale / kasılma
cornea|saydam tabaka / kornea
cryogenics|düşük sıcaklık bilimi
cyanosis|morarma (oksijensizlikten)
cytology|hücre bilimi
debridement|ölü dokunun temizlenmesi
decibel|desibel
degeneration|yozlaşma / bozulma
dendrite|sinir hücresi uzantısı
dermatitis|egzama / cilt iltihabı
dialysis|diyaliz
diastolic|küçük tansiyonla ilgili
dichromatic|iki renkli
dyslexia|okuma güçlüğü / disleksi
dyspnea|nefes darlığı
dystrophy|beslenme/gelişim bozukluğu
echolocation|yankıyla yer bulma
edema|ödem / su toplaması
electrolysis|elektroliz
embolism|damar tıkanıklığı / emboli
embryology|embriyoloji
emphysema|amfizem (akciğer hastalığı)
encephalitis|beyin iltihabı
endocrinology|iç salgı bilimi
endoscopy|endoskopi
entropy|entropi / düzensizlik ölçüsü
epigenetics|epigenetik
erythrocyte|alyuvar
etiology|neden bilimi
eugenics|öjeni / ırk ıslahı
euthanasia|ötenazi
exothermic|ısı veren (kimya)
fibrosis|doku sertleşmesi
flatulence|gaz birikmesi
fluoroscopy|floroskopi
gangrene|kangren
gastritis|mide iltihabı
genealogy|soy bilimi
glaucoma|göz tansiyonu / glokom
glycogen|glikojen
hematology|kan bilimi
hemophilia|hemofili / kan durmaması
homeostasis|iç denge (biyoloji)
hydrolysis|hidroliz
hyperglycemia|yüksek kan şekeri
hypochondria|hastalık hastalığı
hypoglycemia|düşük kan şekeri
hypothalamus|hipotalamus
iatrogenic|tedavi kaynaklı (hastalık)
idiopathic|nedeni bilinmeyen (hastalık)
immunology|bağışıklık bilimi
in vitro|laboratuvar ortamında
in vivo|canlı organizma içinde
incidence|görülme sıklığı (hastalık)
incubation|kuluçka süresi
infarction|enfarktüs / doku ölümü
ischemia|kanlanma azlığı
jaundice|sarılık hastalığı
kinesiology|hareket bilimi
laceration|yırtılma / derin kesik
laryngitis|gırtlak iltihabı
leukemia|lösemi / kan kanseri
leukocyte|akyuvar
liposuction|yağ aldırma
lymphoma|lenf bezi kanseri
megalomania|büyüklük sanrısı
melancholia|melankoli / kara sevda
meningitis|menenjit / beyin zarı iltihabı
metastasis|kanserin yayılması / metastaz
microbiome|mikrobiyom
mitochondria|mitokondri
mitosis|mitoz bölünme
morbidity|hastalık oranı
morphology|biçim bilimi
mutagen|mutasyona yol açan madde
necrosis|doku ölümü / nekroz
nephrology|böbrek bilimi
neurotransmitter|sinir taşıyıcı kimyasal
nosocomial|hastane kaynaklı (enfeksiyon)
obstetrics|doğum bilimi
occlusion|tıkanma
olfactory|koku alma ile ilgili
oncogene|kanser geni
osteoporosis|kemik erimesi
otolaryngology|kulak burun boğaz bilimi
palpitation|kalp çarpıntısı
parasitology|parazit bilimi
pathogenesis|hastalığın gelişim süreci
peristalsis|bağırsak hareketi
pharmacology|ilaç bilimi
phenotype|fenotip
phlebotomy|kan alma işlemi
photosynthesis|fotosentez
platelet|kan pulcuğu / trombosit
pleurisy|akciğer zarı iltihabı
polygraph|yalan makinesi
posology|doz bilimi
prevalence|yaygınlık oranı
prophylaxis|hastalıktan korunma
prosthesis|protez
psychosomatic|ruhsal kaynaklı bedensel rahatsızlık
pulmonary|akciğerle ilgili
quantum mechanics|kuantum mekaniği
radiology|radyoloji
reagent|ayıraç / reaktif
renal|böbrekle ilgili
sclerosis|doku sertleşmesi
sepsis|kan zehirlenmesi
serology|serum bilimi
somnambulism|uyurgezerlik
spectroscopy|tayf ölçümü
stenosis|daralma (damar/kanal)
sublimation|süblimleşme / yüceltme
symbiosis|ortak yaşam
synapse|sinir kavşağı / sinaps
syncope|bayılma
tachycardia|kalp çarpıntısı / taşikardi
teratogen|doğumsal kusura yol açan madde
thrombosis|damar içinde pıhtı oluşumu
tinnitus|kulak çınlaması
tomography|tomografi
toxicology|zehir bilimi
tracheotomy|nefes borusu açma ameliyatı
triage|öncelik belirleme (acil servis)
urology|üroloji
vasoconstriction|damar büzülmesi
vasodilation|damar genişlemesi
vertigo|baş dönmesi
virology|virüs bilimi
viscosity|akışmazlık / kıvam
acculturation|kültürleşme
anacoluthon|sözdizimi bozukluğu (edebiyat)
anaphora|ön yineleme (söz sanatı)
andragogy|yetişkin eğitimi bilimi
anomie|kuralsızlık / toplumsal çözülme
anthropomorphism|insan biçimcilik
antipathy|antipati / soğukluk
antiquarian|antikacı / eski eser uzmanı
aphorist|özdeyiş yazarı
apocryphal|uydurma / doğruluğu şüpheli
apostrophe|seslenme sanatı
arabesque|arabesk / girift süsleme
archaism|eski sözcük kullanımı
assonance|ünlü uyumu / ses yinelemesi
atelier|sanatçı atölyesi
auteur|özgün yönetmen
avant-gardism|öncülük / yenilikçilik
bildungsroman|oluşum romanı
bohemianism|bohemlik / derbeder yaşam
bourgeois|kentsoylu / burjuva
cacophony|ses uyumsuzluğu / kakofoni
caesura|durak (şiirde)
canon|edebi külliyat / temel eserler
caricaturist|karikatürist
chiasmus|çaprazlama (söz sanatı)
chiaroscuro|ışık-gölge karşıtlığı (resim)
cinematography|görüntü yönetmenliği
cloister|manastır avlusu
colloquialism|günlük konuşma dili ifadesi
connoisseurship|sanat uzmanlığı
contrapposto|karşıt duruş (heykel)
counterculture|karşı kültür
credo|inanç bildirgesi / düstur
dadaism|dadaizm
deconstruction|yapısöküm
demography|nüfus bilimi
diaspora|diaspora / göçmen topluluk
didacticism|öğreticilik
dithyramb|coşkulu övgü şiiri
doggerel|kötü ve basit şiir
dramaturgy|tiyatro yazarlığı sanatı
elegiac|ağıtsal / hüzünlü
elision|ses düşmesi
enjambment|dize atlaması (şiir)
epicureanism|epikürcülük / zevk felsefesi
epigram|nükteli kısa şiir / vecize
epistolary|mektup tarzında yazılmış
epitome|özet / mükemmel örnek
esoterica|gizli bilgiler / ezoterik eserler
ethnography|budun betimi / etnografya
ethnocentrism|etnik merkezcilik
euphony|ses güzelliği / kulağa hoş gelme
exoticism|egzotizm
expatriate|yurt dışında yaşayan kimse
fauvism|fuvizm (resim akımı)
festschrift|armağan kitap (akademik)
filigree|telkari / ince işçilik
fin de siècle|yüzyıl sonu (kültürel dönem)
florilegium|çiçek derlemesi / antoloji
futurism|fütürizm / gelecekçilik
genre painting|günlük yaşam resmi
gestalt|bütünlük psikolojisi
hagiography|azizlerin yaşam öyküsü / aşırı övücü biyografi
hermeneutics|yorum bilimi
historiography|tarih yazımı
homily|vaaz / ahlak dersi
idyll|kır şiiri / pastoral sahne
intelligentsia|aydınlar sınıfı
intertextuality|metinlerarasılık
juvenilia|gençlik dönemi eserleri
kitsch|bayağı sanat / kiç
lampoon|hiciv / taşlama
leitmotif|ana motif / tekrarlanan tema
lexicography|sözlük bilimi
limerick|beş dizelik mizahi şiir
litotes|azımsama sanatı
magnum opus|başyapıt / en büyük eser
malapropism|yanlış kelime kullanma komedisi
mannerism|maniyerizm / yapmacıklık
melodrama|melodram
metonymy|ad aktarması / mecaz-ı mürsel
mise-en-scène|sahne düzeni / mizansen
monograph|monografi / tek konulu inceleme
montage|kurgu / montaj
naturalism|doğalcılık / natüralizm
oeuvre|bir sanatçının tüm eserleri
onomastics|ad bilimi
opus|sanat eseri (özellikle müzik)
orthography|imla / yazım kuralları
palindrome|tersten okunuşu aynı olan sözcük
pantomime|sözsüz oyun / pandomim
pastoral|kırsal yaşamı anlatan eser
pastiche|öykünme / karma eser
pathos|acıma ve üzüntü uyandırma gücü
patina|eski eşya üzerindeki oksit tabakası / yaşanmışlık izi
pedagogy|eğitim bilimi
periphrasis|dolaylı anlatım
philistine|sanat ve kültürden anlamayan kimse
picaresque|serüvenci / serseri kahramanlı roman
pointillism|noktacılık (resim)
polyphony|çok seslilik
portmanteau|birleşik kelime (brunch vb.)
prosody|vezin ve ölçü bilimi
provenance|köken / eserin geçmişi
raison d'être|varoluş nedeni
realpolitik|gerçekçi siyaset
roman à clef|gerçek kişilerin gizlendiği roman
rococo|rokoko sanatı
sans-culotte|devrimci halk tabakası
satirist|hiciv yazarı
staccato|kesik kesik (müzik)
synecdoche|parça-bütün ilişkisi (söz sanatı)
tabula rasa|boş levha (zihin)
tautology|gereksiz tekrar / totoloji
thesaurus|eş anlamlılar sözlüğü
threnody|ağıt / mersiye
triptych|üç panelli tablo
trope|söz sanatı / edebi kalıp
vignette|kısa edebi tasvir / vinyet
virtuoso|üstün yetenekli sanatçı
abase|alçaltmak / küçük düşürmek
abash|utandırmak / mahcup etmek
abate|azalmak / dinmek / hafiflemek
abjure|yeminle vazgeçmek / inkar etmek
abnegate|feragat etmek / reddetmek
abrade|aşındırmak / sıyırmak
abrogate|yürürlükten kaldırmak / feshetmek
abscond|gizlice kaçmak / sıvışmak
absolve|aklamak / günahını bağışlamak
accede|kabul etmek / tahta çıkmak
accrete|birikmek / büyümek
acervate|yığmak / kümelemek
acidify|asitleştirmek
acquiesce|razı olmak / ses çıkarmadan kabul etmek
adduce|kanıt olarak göstermek / ileri sürmek
admix|karıştırmak / katmak
adumbrate|taslağını çizmek / önceden haber vermek
aggrandize|büyütmek / yüceltmek / abartmak
amerce|para cezasına çarptırmak
animadvert|eleştirmek / kınamak
apostatize|dininden/inancından dönmek
apotheosize|tanrılaştırmak / göklere çıkarmak
apprise|haberdar etmek / bilgilendirmek
approbate|onaylamak / tasdik etmek
arrogate|haksız yere sahiplenmek / gasp etmek
asseverate|kesin olarak ileri sürmek / yeminle söylemek
attenuate|zayıflatmak / inceltmek
augur|alamet olmak / önceden haber vermek
auscultate|dinlemek (tıbbi)
aver|iddia etmek / doğrulamak
avow|açıkça itiraf etmek / beyan etmek
badger|rahatsız etmek / başının etini yemek
bamboozle|kandırmak / kafasını karıştırmak
bandy|karşılıklı atışmak / yaymak (söylenti)
beatify|kutsamak / mutlu etmek
bedevil|eziyet etmek / karıştırmak
beleaguer|kuşatmak / bunaltmak
belie|yalanlamak / gizlemek
benumb|uyuşturmak / hissizleştirmek
beseech|yalvarmak / yakarmak
besmirch|lekelemek / kirletmek (itibar)
betoken|işaret etmek / göstermek
bewail|ağıt yakmak / yas tutmak
bifurcate|ikiye ayırmak / çatallanmak
bilk|dolandırmak / kazıklamak
blanch|bembeyaz kesilmek / haşlamak
blazon|ilan etmek / süslemek
bludgeon|sopayla dövmek / zorlamak
bowdlerize|sansürlemek / ayıklamak
bristle|tüyleri diken diken olmak / öfkelenmek
brook|tahammül etmek / katlanmak
burnish|parlatmak / cilalamak
calumniate|iftira atmak / karalamak
canvass|oy toplamak / araştırmak
caparison|süslemek / donatmak
castigate|şiddetle eleştirmek / cezalandırmak
cavil|kusur bulmak / kılı kırk yarmak
chafe|sürtünmek / sinirlenmek
chasten|uslandırmak / cezalandırmak
chide|azarlamak / paylamak
circumscribe|sınırlandırmak / kısıtlamak
cloy|bıktırmak / baymak (aşırı tatlı/duygu)
coagulate|pıhtılaşmak
coddle|el bebek gül bebek büyütmek / şımartmak
cogitate|derin düşünmek / kafa yormak
cohere|uyum sağlamak / yapışmak
collocate|yan yana gelmek / dizilmek
commingle|karışmak / kaynaşmak
comport|uyum sağlamak / davranmak
compunct|vicdan azabı duymak
concatenate|birbirine bağlamak / zincirlemek
concoct|uydurmak / hazırlamak (karışım/plan)
condescend|tenezzül etmek / tepeden bakmak
confabulate|sohbet etmek / uydurmak
confute|çürütmek / haksız çıkarmak
congeal|donmak / pıhtılaşmak
connive|göz yummak / gizlice anlaşmak
contemn|hor görmek / küçümsemek
contravene|ihlal etmek / aykırı davranmak
controvert|tartışmak / inkar etmek
convalesce|iyileşmek / nekahat devresinde olmak
convoke|toplantıya çağırmak
co-opt|kendi bünyesine katmak / seçmek
cosset|şımartmak / üzerine titremek
countenance|onaylamak / desteklemek
countermand|emri geri almak / iptal etmek
cozen|aldatmak / kandırmak
crave|canı çok çekmek / arzulamak
cremate|cesedi yakmak
cringe|sinmek / utanmak
cumber|yük olmak / engellemek
dally|oyalanmak / vakit öldürmek
debar|men etmek / yasaklamak
debauch|yoldan çıkarmak / ahlakını bozmak
decant|başka kaba aktarmak / süzmek
decimate|kırıp geçirmek / büyük kısmını yok etmek
defalcate|zimmetine geçirmek
deflower|bozmak / kirletmek
deign|tenezzül etmek / lütfetmek
deliquesce|erimek / sıvılaşmak
demur|itiraz etmek / çekinmek
denude|soymak / çıplak bırakmak
deprecate|karşı çıkmak / onaylamamak
depredate|yağmalamak / talan etmek
deracinate|kökünden sökmek / yerinden etmek
derogate|değerini düşürmek / küçük düşürmek
descant|uzun uzadıya konuşmak / yorum yapmak
descry|uzaktan fark etmek / seçmek
desiccate|kurutmak / nemini almak
despoil|yağmalamak / soymak
devaluate|değerini düşürmek
diabolize|şeytanlaştırmak
diffide|güvenmemek / çekinmek
dilapidate|harap etmek / yıkmak
dilate|genişletmek / uzun anlatmak
disabuse|yanılgıdan kurtarmak / gözünü açmak
disapprobate|onaylamamak
disavow|reddetmek / inkar etmek / tanımamak
discomfit|bozguna uğratmak / mahcup etmek
discountenance|onaylamamak / cesaretini kırmak
disencumber|yükten kurtarmak
disenfranchise|oy hakkından mahrum etmek
disgorge|kusmak / geri vermek (haksız kazancı)
dishevel|saçını başını dağıtmak
disinter|mezardan çıkarmak / gün yüzüne çıkarmak
disport|eğlenmek / oyalanmak
dissemble|gizlemek / ikiyüzlülük yapmak
dissimulate|duygularını gizlemek / numara yapmak
distend|şişmek / gerilmek
divagate|konudan sapmak / dolaşmak
doff|çıkarmak (şapka/giysi)
domineer|zorbalık etmek / hükmetmek
don|giymek / takmak
dote|üzerine titremek / aşırı sevmek
drub|dövmek / yenmek
educe|ortaya çıkarmak / sonuç çıkarmak
effectuate|gerçekleştirmek / yerine getirmek
effervesce|köpürmek / coşmak
effloresce|çiçek açmak / gelişmek
elide|ses düşürmek / atlamak
elucidate|açıklığa kavuşturmak / aydınlatmak
emanate|yayılmak / kaynaklanmak
emasculate|güçsüzleştirmek / etkisiz hale getirmek
emboss|kabartma yapmak
embroil|karıştırmak / bulaştırmak (soruna)
emend|metni düzeltmek / ıslah etmek
enervate|güçten düşürmek / zayıflatmak
enfeeble|zayıflatmak / güçsüzleştirmek
enfranchise|özgürlüğünü/oy hakkını vermek
engender|doğurmak / yol açmak / üretmek
ennoble|yüceltmek / asilleştirmek
ensconce|rahatça yerleşmek / gizlemek
enshrine|kutsal saymak / korumak (yasa/hak)
enshroud|örtmek / gizlemek
enthrall|büyülemek / esir etmek
enucleate|çekirdeğini çıkarmak / açıklamak
enunciate|telaffuz etmek / açıkça bildirmek
etiolate|soldurmak / zayıflatmak
eulogize|övgüyle söz etmek
eviscerate|içini boşaltmak / etkisizleştirmek
excoriate|derisini yüzmek / sertçe eleştirmek
execrate|lanetlemek / nefret etmek
exfoliate|pul pul dökülmek
expurgate|sansürlemek / ayıklamak
extemporize|doğaçlama yapmak
extenuate|hafifletmek (suç/ceza)
extirpate|kökünü kazımak / yok etmek
exult|sevinçten uçmak / zafer kutlamak
farrow|doğurmak (domuz)
fecundate|döllemek / verimli kılmak
felicitate|tebrik etmek / kutlamak
ferret|didik didik aramak / ortaya çıkarmak
filch|aşırmak / çalmak
flagellate|kırbaçlamak
flay|derisini yüzmek / acımasızca eleştirmek
fleer|alay etmek / sırıtmak
flout|hiçe saymak / alenen çiğnemek (kural)
forestall|önlemek / önceden davranıp engellemek
forswear|yeminle vazgeçmek / inkar etmek
fructify|meyve vermek / verimli olmak
fulminate|gürlemek / şiddetle kınamak
gainsay|inkar etmek / karşı çıkmak
gambol|zıplayıp oynamak / neşeyle koşmak
garble|çarpıtmak / karıştırmak (mesaj)
garnish|süslemek / maaşına haciz koymak
gibe|alay etmek / takılmak
gird|kuşanmak / hazırlamak
glean|toplamak / derlemek (bilgi)
gourmandize|oburca yemek
grandstand|gösteriş yapmak / tribünlere oynamak
grouse|sızlanmak / homurdanmak
hallow|kutsamak / kutsal saymak
harry|rahatsız etmek / taciz etmek
hector|zorbalık etmek / gözünü korkutmak
hew|kesmek / yontmak
hypostatize|somutlaştırmak / varlık atfetmek
immolate|kurban etmek / yakmak
immure|hapsetmek / duvar örmek
impanel|jüri seçmek / listeye almak
impeach|suçlamak / görevden almak
impend|eli kulağında olmak / yaklaşmak
impetrate|yalvararak elde etmek
impinge|çarpmak / ihlal etmek / etkilemek
imprecate|beddua etmek
impugn|itiraz etmek / doğruluğunu sorgulamak
impute|atfetmek / yüklemek (suç/neden)
inculcate|aşılamak / zihnine yerleştirmek
indite|kaleme almak / yazmak
indurate|katılaştırmak / hissizleştirmek
infatuate|aklını başından almak / körü körüne aşık etmek
ingeminate|tekrarlamak / yinelemek
inhere|doğasında bulunmak / ayrılmaz parçası olmak
interdict|yasaklamak / men etmek
interpolate|araya eklemek / tahrif etmek
interpose|araya girmek / müdahale etmek
intone|makamla okumak / tonlamak
inure|alıştırmak / nasırlaştırmak (acıya/zorluğa)
inveigh|şiddetle eleştirmek / saldırmak (sözle)
invigorate|canlandırmak / güç vermek
iterate|tekrarlamak
jostle|itip kakmak / omuz atmak
ken|bilmek / tanımak
knavery|alçaklık yapmak
kowtow|yerlere kadar eğilmek / dalkavukluk etmek
lambaste|şiddetle azarlamak / dövmek
leaven|mayalamak / canlandırmak
lionize|ünlü biri gibi ağırlamak / yüceltmek
loll|tembelce uzanmak / sarkmak
lucubrate|gece geç saatlere kadar çalışmak
macerate|yumuşatmak / ıslatmak
machinate|entrika çevirmek
malinger|hastalık numarası yapmak (işten kaçmak için)
manacle|kelepçelemek / kısıtlamak
manumit|köleyi azat etmek
mar|bozmak / lekelemek
masticate|çiğnemek
matriculate|üniversiteye kaydolmak
maul|parçalamak / hırpalamak
mendicate|dilenmek
mercurialize|hareketlendirmek
mince|kıymak / lafı ağzında gevelemek
misconstrue|yanlış yorumlamak
molt|tüy/deri dökmek
moot|tartışmaya açmak
mottle|beneklendirmek
mulct|para cezası kesmek / dolandırmak
murmur|mırıldanmak
natter|gevezelik etmek
nettle|sinirlendirmek / kızdırmak
niggle|ufak tefek şeylere takılmak
novate|borcu yenilemek
objurgate|azarlamak / paylamak
obtrude|zorla sokmak / rahatsız etmek
obviate|önlemek / ortadan kaldırmak (ihtiyaç/sorun)
occlude|tıkamak / kapatmak
ominate|kehanette bulunmak
opine|fikir yürütmek / düşünmek
oppugn|karşı çıkmak / saldırmak
oscillate|salınmak / kararsız kalmak
ossify|kemikleşmek / katılaşmak
outflank|kuşatmak / kurnazlıkla alt etmek
outstrip|geride bırakmak / aşmak
overawe|gözünü korkutmak
palliate|hafifletmek / örtbas etmek
palpitate|çarpmak (kalp) / titremek
pander|kötü emellere alet olmak / yaranmak
panegyrize|övgüler düzmek
parley|düşmanla görüşmek / müzakere etmek
peculate|zimmete para geçirmek
peddle|seyyar satıcılık yapmak / yaymak
peregrinate|seyahat etmek / diyar diyar gezmek
perempt|iptal etmek / bozmak
perfuse|yaymak / içine akıtmak
perjure|yalan yere yemin etmek
perorate|uzun söylev çekmek / konuşmayı bağlamak
perspire|terlemek
peruse|dikkatle okumak / incelemek
philander|çapkınlık yapmak
pillory|rezil etmek / alenen eleştirmek
plumb|derinliğini ölçmek / anlamak
pontificate|bilgiçlik taslayarak konuşmak
portend|habercisi olmak (kötü olay)
prate|boş konuşmak / gevezelik etmek
prattle|çocuk gibi gevezelik etmek
predestinate|kaderini önceden belirlemek
preen|tüylerini düzeltmek / süslenip böbürlenmek
prefigure|önceden temsil etmek / haber vermek
preponderate|ağır basmak / üstün gelmek
presage|önceden haber vermek
prescind|ayırmak / soyutlamak
primp|süslenmek / kendine çekidüzen vermek
procreate|üremek / çocuk sahibi olmak
proffer|sunmak / teklif etmek
prognosticate|tahmin etmek / kehanette bulunmak
prolix|sözü uzatmak
promulgate|ilan etmek / yaymak (yasa/fikir)
propitiate|yatıştırmak / gönlünü almak
propound|ileri sürmek / teklif etmek
prorogue|oturumu ertelemek
proselytize|dinini/inancını yaymaya çalışmak
pulchritude|güzellik
pullulate|kaynamak / hızla üremek
puncture|delmek / patlatmak
purloin|aşırmak / çalmak
purport|iddia etmek / anlamına gelmek
purvey|tedarik etmek / sağlamak
putrefy|çürümek / kokuşmak
quail|korkudan sinmek / çekinmek
quiesce|sakinleşmek / durulmak
rankle|içini kemirmek / acı vermek
rant|bağırıp çağırmak / nutuk atmak
rarefy|seyreltmek / inceltmek
ratiocinate|akıl yürütmek / mantık kurmak
reave|soymak / yağmalamak
rebuff|terslemek / reddetmek
recreate|yeniden yaratmak / dinlenmek
recriminate|karşılıklı suçlamak
recuse|reddetmek / çekilmek
redact|yayına hazırlamak / sansürlemek
redound|sonuç doğurmak / katkıda bulunmak
regale|ziyafet çekmek / eğlendirmek
reify|somutlaştırmak / şeyleştirmek
rejoice|sevinmek
renege|sözünden dönmek / caymak
repine|sızlanmak / yakınmak
replete|doldurmak / tıka basa doyurmak
reprehend|kınamak / ayıplamak
requite|karşılığını vermek (iyilik/kötülük)
resile|geri sıçramak / esnemek
retrench|masrafları kısmak / geri çekilmek
retrogress|gerilemek / eskiye dönmek
rhapsodize|coşkuyla övmek
ruminate|derin düşünmek / geviş getirmek
satirize|hicvetmek / yermek
scintillate|parıldamak / kıvılcım saçmak
scourge|kırbaçlamak / felaket getirmek
secularize|laikleştirmek
sedate|sakinleştirmek
sermonize|vaaz vermek / ahlak dersi vermek
shirk|görevden kaçmak / kaytarmak
shrive|günah çıkarmak / affetmek
sibilate|ıslık çalmak / tıslamak
sidestep|kaçınmak / atlatmak
simper|yapmacık gülümsemek
skulk|gizlice dolaşmak / pusuya yatmak
slake|susuzluğunu gidermek / söndürmek
slough|deri değiştirmek / atmak
smirch|lekelemek / kirletmek
solace|teselli etmek
solemnize|törenle kutlamak / ciddileştirmek
sophisticate|karmaşıklaştırmak / saflığını bozmak
spurn|elinin tersiyle itmek / reddetmek
squelch|bastırmak / ezmek
stanch|kanamayı durdurmak
stultify|aptal durumuna düşürmek / etkisizleştirmek
sublimate|yüceltmek / yönlendirmek
suborn|rüşvetle yalan söyletmek
subserve|hizmet etmek / yardımcı olmak
subtilize|inceltmek / kılı kırk yarmak
succor|yardım etmek / imdadına yetişmek
suffuse|kaplamak / yayılmak (renk/ışık)
sully|kirletmek / lekelemek (onur)
superannuate|yaş haddinden emekli etmek / eskitmek
superimpose|üst üste bindirmek
supplicate|yalvarmak / yakarmak
swathe|sarmak / kundaklamak
syncopate|hece/nota düşürmek
tabulate|çizelge haline getirmek
tantalize|umut verip vermemek / eziyet etmek
temporize|zaman kazanmak / oyalamak
tergiversate|döneklik etmek / kaçamak konuşmak
thrall|köleleştirmek / büyülemek
titillate|gıdıklamak / heyecanlandırmak
toady|dalkavukluk etmek
traduce|iftira atmak / karalamak
trammel|engellemek / kısıtlamak
transfigure|görünümünü değiştirmek / yüceltmek
transmogrify|tuhaf bir şekle sokmak
transmute|dönüştürmek / başkalaştırmak
travesty|gülünç taklidini yapmak / çarpıtmak
trepan|kafatasını delmek
truckle|boyun eğmek / dalkavukluk etmek
tumefy|şişirmek / kabartmak
ululate|ulumak / feryat etmek
undergird|desteklemek / temel oluşturmak
undulate|dalgalanmak
unearth|gün yüzüne çıkarmak / kazıp bulmak
unfeigned|içten / samimi
unhinge|akıl dengesini bozmak / yerinden çıkarmak
upbraid|azarlamak / paylamak
variegate|çeşitlendirmek / alacalamak
vaticinate|kehanette bulunmak
vegetate|ot gibi yaşamak / hareketsiz kalmak
verdigris|bakır pası tutmak
vituperate|ağır hakaret etmek
vociferate|yaygara koparmak / bağırmak
volatilize|uçucu hale getirmek / buharlaştırmak
welsh|sözünden dönmek / borcunu ödememek
wheedle|tatlı dille kandırmak
winnow|elemek / ayıklamak
yclept|adlandırılan / denen
aberrant|sapmış / anormal
abeyant|askıda / geçici olarak durmuş
abstruse|anlaşılması güç / derin
acarpous|kısır / meyve vermeyen
acrimonious|sert / kırıcı / öfkeli
adscititious|eklenmiş / sonradan katılmış
adulatory|aşırı övücü / dalkavukça
aegis|koruyucu / himaye eden
aeonian|sonsuz / ebedi
agnate|baba tarafından akraba
alacritous|hevesli / çabuk
aleatory|şansa bağlı / rastgele
amaranthine|solmaz / ölümsüz
ambidextrous|iki elini de ustalıkla kullanan
ancillary|yardımcı / ikincil
anodyne|ağrı dindirici / zararsız / sıkıcı
anomalous|kural dışı / anormal
antediluvian|Nuh tufanından kalma / çok eski
antinomian|yasa/kural tanımaz
antipathetic|antipatik / zıt
aphasic|konuşma yetisini yitirmiş
apodeictic|kesin / tartışılmaz
apoplectic|öfkeden kudurmuş / felçli
apostate|dininden/inancından dönmüş
apposite|yerinde / uygun / tam isabet
approbatory|onaylayıcı
aquiline|kartal gagası gibi (burun)
arcane|gizli / sadece uzmanların bildiği
argute|zeki / kurnaz / tiz
arrant|katıksız / tam (saçmalık/yalancı)
artful|kurnaz / maharetli
artless|saf / doğal / yapmacıksız
asinine|eşekçe / aptalca
atavistic|ilkel / atalara özgü
atrabilious|huysuz / melankolik / somurtkan
attenuated|zayıflamış / incelmiş
autochthonous|yerli / otokton
avuncular|amca gibi / koruyucu ve sevecen
axiomatic|apaçık / belitsel / tartışılmaz
baleful|uğursuz / zararlı / tehditkar
balmy|ılık / hafif deli
baneful|zehirli / yıkıcı / uğursuz
beatific|mutlu / kutsal / huzur dolu
bedraggled|sırılsıklam ve kirli / perişan
behemoth|devasa / muazzam
belated|gecikmiş
bellicose|savaşçı / kavgacı
beneficent|iyiliksever / hayırlı
benighted|cahil / karanlıkta kalmış
besotted|körkütük aşık / sarhoş
bibulous|içkiye düşkün / emici
bilious|huysuz / safralı
blase|bıkkın / umursamaz / görmüş geçirmiş
blithe|kaygısız / neşeli / düşüncesiz
boorish|kaba / görgüsüz
bountiful|cömert / bereketli
bovine|sığır gibi / ağırkanlı / aptal
braggart|övüngen
brobdingnagian|devasa / muazzam
bromidic|basmakalıp / sıkıcı
bumptious|kendini beğenmiş / küstah
burnished|parlatılmış / cilalı
cadaverous|ceset gibi / solgun ve zayıf
callow|toy / tecrübesiz
calumnious|iftira niteliğinde
cantankerous|huysuz / geçimsiz
capacious|geniş / ferah
captious|kusur arayan / kılı kırk yaran
cardinal|temel / en önemli
carking|bunaltıcı / endişe verici
carnal|bedensel / şehvani
carping|sürekli eleştiren / mızmız
castigating|cezalandırıcı / sert eleştiren
cataclysmic|yıkıcı / felaket niteliğinde
categorical|kesin / şartsız
catholic|kapsamlı / evrensel / hoşgörülü
censorious|eleştirici / kusur bulan
cerulean|gök mavisi
chary|ihtiyatlı / çekingen
chauvinistic|şovenist / aşırı milliyetçi
chimerical|hayali / gerçek dışı
choleric|çabuk öfkelenen / asabi
churlish|kaba / huysuz / cimri
circumspect|ihtiyatlı / tedbirli
clarion|berrak ve yüksek (ses/çağrı)
clement|ılıman / merhametli
climactic|doruk noktasına ulaşan
cloying|bıktırıcı / aşırı tatlı
coeval|çağdaş / yaşıt
cognate|kökeni aynı / akraba
cognizant|farkında / haberdar
colloquial|günlük konuşma diline ait
comatose|komada / uyuşuk
comely|alımlı / hoş / yakışıklı
commodious|geniş / ferah
compendious|kısa ve öz / kapsamlı
complaisant|uysal / nazik / uyumlu
complicit|suç ortağı
compunctious|vicdan azabı çeken
concatenated|birbirine bağlı / zincirleme
conciliatory|uzlaştırıcı / yatıştırıcı
condign|hak edilmiş / uygun (ceza)
condescending|tepeden bakan / küçümseyen
congruent|uyumlu / eşleşen
connubial|evlilikle ilgili
consecrated|kutsanmış / adanmış
consonant|uyumlu / ahenkli
contemporaneous|aynı dönemde yaşayan/olan
contiguous|bitişik / komşu
contrite|pişman / tövbekar
contumacious|dik başlı / itaatsiz
corpulent|şişman / iri yarı
corrigible|düzeltilebilir / uslanabilir
coruscating|parıldayan / zekice
cosseted|şımartılmış
coterminous|sınırları ortak / eşzamanlı
countervailing|dengeleyici / karşıt
craven|korkak / yüreksiz
crepuscular|alacakaranlıkla ilgili
crestfallen|morali bozuk / boynu bükük
cupidinous|açgözlü / tamahkar
curmudgeonly|huysuz / aksi / cimri
daedal|ustaca yapılmış / karmaşık
dainty|narin / zarif / seçici
dank|nemli ve soğuk / rutubetli
dapper|şık / tertipli
dastardly|alçakça / korkakça
dauntless|korkusuz / yılmaz
debonair|kibar / şık / neşeli
decadent|yozlaşmış / çökmüş
deceitful|aldatıcı / ikiyüzlü
deductive|tümdengelimsel
defamatory|iftira niteliğinde
deft|ustalıkla / çevik
delusive|aldatıcı / yanıltıcı
demagogic|demagojik
demented|delirmiş / çılgın
demotic|halka ait / günlük
desiccated|kurutulmuş / ruhsuz
despotic|zorba / despot
desultory|gelişigüzel / daldan dala atlayan
diabolical|şeytani / çok kötü
diaphanous|şeffaf / incecik / tül gibi
dilatory|geciktirici / oyalayıcı
discursive|konudan konuya atlayan / mantıksal
disdainful|küçümseyici / kibirli
disinterested|tarafsız / çıkarsız
dissolute|sefih / ahlaksız
dissonant|uyumsuz / kakofonik
diurnal|gündüzle ilgili / günlük
divisive|bölücü / ayrıştırıcı
doctrinaire|dogmatik / katı kuralcı
doleful|kederli / hüzünlü
dolorous|acı dolu / kederli
doltish|aptalca / kalın kafalı
doting|üzerine titreyen / aşırı seven
dour|somurtkan / sert / asık suratlı
droll|tuhaf ve komik / nüktedan
dulcet|tatlı / kulağa hoş gelen (ses)
dyspeptic|huysuz / hazımsız
earnest|ciddi / içten / samimi
ecumenical|evrensel / birleştirici
edifying|eğitici / ahlaken geliştirici
effete|güçsüzleşmiş / yozlaşmış / züppe
effulgent|parlak / ışıldayan
egalitarian|eşitlikçi
eleemosynary|hayırsever / sadakaya dayalı
emeritus|emekli (unvanını koruyan profesör)
emulous|rekabetçi / özenen
endemic|yerel / bölgeye özgü
enervated|güçten düşmüş / bitkin
epicurean|zevk ve sefa düşkünü
equable|sakin / dengeli / ılıman
equanimous|soğukkanlı / dengeli
eremitic|münzevi / inzivaya çekilmiş
ersatz|sahte / yapay / taklit
estimable|saygıdeğer / takdir edilesi
euphonious|kulağa hoş gelen
evanescent|geçici / uçucu / kaybolan
exasperating|çileden çıkarıcı
excoriating|sert eleştiren
execrable|iğrenç / berbat / lanetli
exemplary|örnek niteliğinde / kusursuz
exhaustive|kapsamlı / eksiksiz
exigent|acil / zorlayıcı
exiguous|yetersiz / az / kıt
expeditious|hızlı ve verimli
facile|kolay / yüzeysel / basite indirgenmiş
factious|hizipçi / bölücü
factitious|yapay / uydurma
fallow|nadasa bırakılmış / işlenmemiş
fecund|verimli / doğurgan
fetid|pis kokulu / kokuşmuş
fiendish|şeytani / zalim / çok zor
filial|evlada yakışır
flagitious|alçakça / rezil
forbearing|sabırlı / hoşgörülü
forensic|adli / mahkemeyle ilgili
fraternal|kardeşçe
frenetic|çılgınca / telaşlı
frolicsome|oyuncu / neşeli
froward|dik başlı / inatçı
fulsome|aşırı / samimiyetsiz (övgü)
funereal|cenaze gibi / kasvetli
fustian|abartılı / boş (söz)
gainsaying|inkar eden
gallant|yiğit / centilmen
gaudy|gösterişli ama zevksiz
gelid|buz gibi / çok soğuk
genteel|kibar / ince / yapmacık kibar
germane|konuyla ilgili / yerinde
gnomic|özlü / bilmecemsi
gossamer|örümcek ağı gibi ince / narin
grandiloquent|ağdalı konuşan
grizzled|kır saçlı
gruff|kaba / sert / boğuk (ses)
gustatory|tat alma ile ilgili
hallowed|kutsal / kutsanmış
harried|bunaltılmış / taciz edilmiş
headstrong|dik başlı / inatçı
hegemonic|egemen / baskın
hidebound|dar görüşlü / tutucu
hoary|çok eski / ak saçlı
hortatory|öğüt veren / teşvik edici
ignoble|alçak / aşağılık
immanent|içkin / doğasında var olan
impalpable|elle tutulamaz / anlaşılmaz
impious|dinsiz / saygısız
importunate|ısrarcı / bunaltıcı
improvident|savurgan / geleceğini düşünmeyen
impudent|utanmaz / küstah
inarticulate|derdini anlatamayan
incandescent|akkor / parlak / çok öfkeli
inchoate|başlangıç aşamasında / tam gelişmemiş
inclement|sert / fırtınalı (hava)
inconsolable|teselli edilemez
incredulous|inanmayan / şüpheci
indigent|yoksul / muhtaç
ineluctable|kaçınılmaz / karşı konulmaz
ingrate|nankör
inimitable|taklit edilemez / eşsiz
insalubrious|sağlıksız / pis
insouciant|kaygısız / aldırmaz
irenic|barışçıl / uzlaştırıcı
irksome|can sıkıcı / bıktırıcı
irremediable|çaresiz / düzeltilemez
irresolute|kararsız / tereddütlü
jaundiced|kıskanç / önyargılı
jejune|sıkıcı / yavan / çocuksu
jocose|şakacı / neşeli
knavish|alçakça / düzenbaz
lachrymose|ağlamaklı / sulugöz
lackadaisical|isteksiz / uyuşuk / gevşek
lambent|hafifçe parlayan / zekice
languorous|rehavet veren / baygın
largesse|cömertlik / ihsan
lascivious|şehvetli / müstehcen
laudatory|övücü
leery|şüpheci / tetikte
libidinous|şehvet düşkünü
lissome|esnek / kıvrak / zarif
lithe|esnek / çevik
loath|isteksiz / gönülsüz
lucre|para / haksız kazanç
machiavellian|makyavelist / sinsi ve çıkarcı
maladroit|sakar / beceriksiz
malcontent|hoşnutsuz / asi
maudlin|aşırı duygusal / sulugöz
mendicant|dilenci
meretricious|sahte gösterişli / bayağı
mettlesome|cesur / ateşli / dayanıklı
miasmatic|zehirli / boğucu
minatory|tehditkar / korkutucu
modish|modaya uygun / şık
mollifying|yatıştırıcı
monolithic|yekpare / katı ve değişmez
moribund|ölmek üzere olan / can çekişen
motley|alacalı / karışık / çeşit çeşit
multifarious|çok çeşitli / türlü türlü
natty|şık / tertipli
neophyte|acemi / yeni başlayan
noisome|iğrenç kokulu / zararlı
nonplussed|şaşkına dönmüş
nugatory|değersiz / önemsiz / geçersiz
obfuscatory|kafa karıştırıcı
oblique|eğik / dolaylı / imalı
obstreperous|gürültücü / ele avuca sığmaz
oleaginous|yağlı / yapmacık kibar / yağcı
opprobrious|aşağılayıcı / utanç verici
oracular|kehanet gibi / gizemli
ossified|kemikleşmiş / katılaşmış
ostensible|görünürdeki / sözde
overweening|kibirli / haddini bilmez
paltry|değersiz / önemsiz / az
patrician|soylu / aristokrat
penurious|yoksul / cimri
perspicuous|açık / anlaşılır
pertinacious|inatçı / azimli
piquant|iştah açıcı / keskin / ilgi çekici
platitudinous|basmakalıp / klişe
plebeian|halktan / avam / sıradan
plethoric|aşırı dolu / fazla
politic|kurnaz / tedbirli / yerinde
polymathic|çok yönlü bilgili
pompous|kendini beğenmiş / şatafatlı
prescient|öngörülü / geleceği sezen
primordial|ilkel / başlangıçtan beri var olan
pristine|bozulmamış / tertemiz / ilk günkü gibi
promiscuous|gelişigüzel / ayrım yapmayan
pulchritudinous|güzel / alımlı
putative|varsayılan / sanılan
quiescent|sakin / hareketsiz
quotidian|gündelik / sıradan
raffish|derbeder ama çekici
rakish|çapkın / şık / hovarda
redolent|kokan / hatırlatan / çağrıştıran
refulgent|parlak / göz kamaştırıcı
restive|yerinde duramayan / huzursuz / dik başlı
risible|gülünç / komik
roguish|haylaz / düzenbaz
rubicund|al yanaklı / kırmızı yüzlü
saccharine|aşırı tatlı / yapmacık duygusal
sacrosanct|kutsal / dokunulmaz
salacious|müstehcen / şehvetli
sapient|bilge / akıllı
saturnine|kasvetli / somurtkan
sebaceous|yağlı
sedulous|çalışkan / özenli
senescent|yaşlanan
serpentine|yılan gibi kıvrımlı / sinsi
simian|maymunsu
sinuous|kıvrımlı / zarif
slothful|tembel / uyuşuk
slovenly|pasaklı / özensiz
somnolent|uykulu / uyku getiren
sophomoric|toy / bilgiçlik taslayan
soporific|uyku getiren / sıkıcı
specious|aldatıcı / görünüşte doğru
stolid|duygusuz / tepkisiz / soğukkanlı
stygian|zifiri karanlık / cehennemi
subaltern|ikincil / ast
sublime|yüce / ulvi / muhteşem
subservient|boyun eğen / uşak ruhlu
supernal|göksel / ilahi
supine|sırtüstü yatan / pasif / uyuşuk
suppliant|yalvaran / yakaran
sybaritic|sefa düşkünü
tendentious|taraflı / maksatlı
tenebrous|karanlık / kasvetli
testy|huysuz / çabuk sinirlenen
titular|unvan sahibi / sözde
transcendent|aşkın / üstün
tumid|şişkin / ağdalı
ulterior|gizli / art niyetli
umbrageous|alıngan / gölgeli
uxorious|karısına aşırı düşkün
vainglorious|kibirli / kendini beğenmiş
valedictory|veda niteliğinde
variegated|alacalı / çeşitli
vernal|ilkbaharla ilgili / genç
wizened|buruşmuş / kurumuş
xenophobic|yabancı düşmanı
yeomanly|yiğitçe / sadık
a fortiori|evleviyetle / haydi haydi
a priori|deney öncesi / önsel
ab initio|başlangıçtan itibaren
ad hoc|özel amaçlı / duruma özgü
ad infinitum|sonsuza dek
ad nauseam|bıktırıncaya kadar
alias|namıdiğer / takma adla
altruistically|özgecil bir şekilde
anachronistically|çağ dışı bir şekilde
antithetically|taban tabana zıt şekilde
aphoristically|özlü bir şekilde
apocryphally|uydurma / rivayet olarak
appositely|yerinde ve uygun şekilde
approvingly|onaylayarak
arbitrarily|keyfi olarak
atavistically|ilkel içgüdülerle
austerely|sade ve sert biçimde
axiomatically|apaçık / tartışmasız biçimde
balefully|uğursuzca / tehditkarca
banally|sıradan bir şekilde
beatifically|huzur ve mutlulukla
bellicosely|kavgacı bir tavırla
belligerently|saldırganca
beneficently|iyilikseverlikle
benignly|iyi niyetle / zararsızca
blithely|kaygısızca / düşüncesizce
bombastically|abartılı ve şatafatlı şekilde
boorishly|kabaca / görgüsüzce
bucolically|kırsal bir huzurla
by and large|genel olarak / bütünüyle
calumniously|iftira atarak
cantankerously|huysuzca
categorically|kesinlikle / şartsız olarak
censoriously|eleştirel / kusur bularak
churlishly|kabaca / aksi bir tavırla
circumspectly|ihtiyatlı bir şekilde
colloquially|günlük dilde
commensurately|orantılı olarak
compendiously|kısa ve öz olarak
complicitly|suç ortaklığı yaparak
conciliatorily|uzlaştırıcı bir tavırla
concomitantly|eşzamanlı olarak / beraberinde
conducively|elverişli şekilde
congenially|cana yakın bir şekilde
congruently|uyumlu olarak
contiguously|bitişik olarak
contritely|pişmanlıkla
convolutedly|karmaşık bir şekilde
covetously|açgözlülükle / kıskançlıkla
cravenly|korkakça
credulously|saflıkla / kolay inanarak
culpably|suçlu bir şekilde
dauntlessly|korkusuzca
debonairly|kibar ve neşeli şekilde
deductively|tümdengelim yoluyla
deferentially|saygıyla / hürmetle
deleteriously|zarar verici şekilde
delusively|yanıltıcı biçimde
demurely|ağırbaşlılıkla / utangaçça
depravedly|ahlaksızca
derogatorily|aşağılayıcı şekilde
despicably|alçakça
despondently|umutsuzlukla
despotically|zorbalıkla
desultorily|gelişigüzel / daldan dala
detachedly|tarafsızca / ilgisizce
deviously|sinsice / dolambaçlı yoldan
diabolically|şeytanca
diffidently|çekingenlikle
dilatorily|geciktirerek / oyalayarak
disapprovingly|onaylamayarak
discerningly|anlayışla / seçici olarak
disconsolately|kederli bir şekilde
discordantly|uyumsuz bir şekilde
discursively|mantıksal olarak / konudan konuya
disinterestedly|tarafsızca / çıkarsızca
disparately|farklı şekillerde
dissolutely|sefih bir şekilde
dolefully|kederle / hüzünle
dolorously|acı içinde
dourly|somurtkanlıkla
draconianly|acımasızca / çok sert biçimde
drolly|nüktedan bir tavırla
duplicitously|ikiyüzlülükle
ebulliently|coşkuyla
eclectically|seçmeci bir yaklaşımla
edifyingly|eğitici bir şekilde
eerily|ürkütücü bir şekilde
efficaciously|etkili bir şekilde
effusively|taşkın bir duygusallıkla
egalitarianly|eşitlikçi bir yaklaşımla
egocentrically|benmerkezci şekilde
elatedly|büyük sevinçle
elusively|ele geçmez bir şekilde
enthrallingly|büyüleyici şekilde
ephemerally|kısa süreliğine
equably|sakin ve dengeli biçimde
equivocally|belirsiz / iki anlamlı şekilde
esoterically|gizli / sadece uzmanlara hitaben
ethereally|uhrevi / narin bir şekilde
evanescently|geçici olarak
evocatively|çağrıştırıcı şekilde
exactingly|titizlikle
exasperatingly|çileden çıkarıcı şekilde
execrably|iğrenç / berbat biçimde
exemplarily|örnek olacak şekilde
exhaustively|kapsamlı ve eksiksiz olarak
expediently|çıkarına uygun şekilde
extemporaneously|doğaçlama olarak
extraneously|konu dışı olarak
exuberantly|coşkuyla
facilely|yüzeysel bir şekilde
fatuously|aptalca
fawningly|yaltaklanarak
fecklessly|sorumsuzca / beceriksizce
felicitously|yerinde ve mutlu şekilde
fervidly|ateşli bir şekilde
fickly|değişken / maymun iştahlıca
fiendishly|şeytanca / çok zor şekilde
floridly|süslü bir şekilde
forbearingly|sabır ve hoşgörüyle
fractiously|huysuzca / kavgacı biçimde
frenetically|çılgınca / telaşla
frivolously|ciddiyetsizce
fulsomely|aşırı ve samimiyetsiz şekilde
gauchely|sakarcasına / görgüsüzce
genteelly|kibarca / ince bir tavırla
grandiloquently|ağdalı bir dille
grotesquely|tuhaf ve gülünç biçimde
gruelingly|tüketici bir şekilde
gruffly|kabaca / sert bir sesle
guilelessly|saflıkla / hilesizce
haggardly|bitkin bir halde
haplessly|talihsizce
hedonistically|hazcı bir yaklaşımla
histrionically|abartılı / tiyatral şekilde
hyperbolically|abartılı bir şekilde
iconoclastically|gelenekleri yıkarak
ignobly|alçakça
illusorily|yanıltıcı biçimde
illustriously|şanlı bir şekilde
immutably|değişmez biçimde
impenetrably|anlaşılmaz şekilde
imperatively|zorunlu olarak
imperturbably|soğukkanlılıkla
imperviously|etkilenmeden
impiously|saygısızca
implacably|amansızca
implausibly|akla yatkın olmayan şekilde
impolitically|tedbirsizce
improvidently|savurganca
impudently|utanmazca
in perpetuity|sonsuza dek / ebediyen
inalienably|devredilemez biçimde
inanely|anlamsızca
inarticulately|derdini anlatamadan
inclemently|sert ve fırtınalı biçimde
inconsequentially|önemsiz şekilde
incontrovertibly|tartışmasız biçimde
incorrigibly|uslanmaz bir şekilde
incredulously|inanmayarak / şüpheyle
indefatigably|yorulmadan / yılmadan
indelibly|silinmez biçimde
indigently|yoksulluk içinde
indomitably|yenilmez bir azimle
ineffably|tarif edilemez şekilde
ineluctably|kaçınılmaz olarak
inertly|hareketsizce
infernally|berbat derecede
infinitesimally|sonsuz derecede küçük olarak
inimitably|eşsiz bir şekilde
inscrutably|esrarengiz biçimde
insipidly|sıkıcı / yavan bir şekilde
insouciantly|kaygısızca / aldırmadan
insularly|dar görüşlülükle
intangibly|soyut olarak
interminably|bitmek bilmeden
intractably|inatla / çözülmez biçimde
intransigently|uzlaşmaz bir tavırla
intrepidly|korkusuzca
inveterately|müzmin bir şekilde
invincibly|yenilmez şekilde
inviolably|dokunulmaz biçimde
ipso facto|kendiliğinden / bu gerçek nedeniyle
irately|öfkeyle
irksomely|can sıkıcı biçimde
irreconcilably|uzlaştırılamaz biçimde
irrefutably|çürütülemez biçimde
irremediably|çaresizce
irrepressibly|dizginlenemez biçimde
irreproachably|kusursuzca
irresolutely|kararsızlıkla
itinerantly|gezici olarak
jadedly|bıkkınlıkla
jaundicedly|önyargıyla
jejunely|çocuksu / yavan biçimde
jocosely|şakacı bir dille
knavishly|alçakça
labyrinthinely|karmaşık bir şekilde
lachrymosely|ağlamaklı bir halde
lackadaisically|isteksizce / gevşekçe
lasciviously|şehvetle
latently|gizlice
laudably|övgüye değer biçimde
laudatorily|övücü bir dille
laxly|gevşekçe
leerily|şüpheyle / tetikte
licentiously|ahlaksızca
lithely|çevikçe / esneklikle
lividly|öfkeden kudurmuş halde
loathsomely|iğrenç bir şekilde
loquaciously|gevezelikle
lugubriously|kasvetli bir şekilde
luminously|parlak bir şekilde
luridly|korkunç / sansasyonel biçimde
lustrously|parıldayarak
macabrely|ürkütücü biçimde
machiavellianly|sinsice ve çıkarcı biçimde
maladroitly|sakarcasına
malleably|uysalca
manifoldly|çok yönlü olarak
martially|askeri bir tavırla
maudlinly|aşırı duygusallıkla
mawkishly|yapmacık duygusallıkla
meagerly|yetersiz derecede
mellifluously|tatlı ve akıcı bir sesle
mendaciously|yalancılıkla
mercenarily|paragöz bir tavırla
mercurially|değişken bir ruh haliyle
meretriciously|sahte gösterişle
meritoriously|takdire şayan biçimde
mettlesomely|cesurca
minatorily|tehditkarca
minusculely|ufacık derecede
mirthfully|neşeyle
misanthropically|insanlardan nefret ederek
modishly|modaya uygun şekilde
monolithically|yekpare ve katı biçimde
mordantly|iğneleyici bir dille
moribundly|can çekişir halde
multifariously|çok çeşitli biçimlerde
mundanely|sıradan bir şekilde
munificently|çok cömertçe
mutatis mutandis|gerekli değişiklikler yapılmak koşuluyla
myopically|dar görüşlülükle
nebulously|belirsizce
negligibly|ihmal edilebilir düzeyde
nugatorily|değersiz biçimde
obliquely|dolaylı olarak / imalı şekilde
obstreperously|gürültücü ve asi biçimde
obtusely|kalın kafalılıkla
odiously|iğrenç bir şekilde
officiously|işgüzarlıkla
omnisciently|her şeyi bilircesine
opprobriously|aşağılayıcı biçimde
oracularly|kehanet gibi
ostensibly|görünüşte / sözde
overweeningly|kibirle
palatably|kabul edilebilir şekilde
pallidly|solgun bir halde
parochially|dar görüşlülükle
pathologically|hastalıklı biçimde
patricianly|soyluca
pellucidly|berrak bir şekilde
penitently|pişmanlıkla
penuriously|yoksulluk / cimrilik içinde
peripherally|çevresel / ikincil olarak
perspicaciously|keskin bir kavrayışla
perspicuously|açık ve anlaşılır şekilde
pertinaciously|inatla ve azimle
philanthropically|hayırseverlikle
phlegmatically|soğukkanlılıkla
piquantly|ilgi çekici biçimde
pithily|kısa ve öz olarak
plaintively|hüzünlü bir şekilde
platitudinously|basmakalıp sözlerle
plebeianly|sıradan / avam biçimde
pliably|esnek bir şekilde
polemically|tartışmacı bir üslupla
politicly|tedbirli ve kurnazca
portentously|uğursuzca / şatafatla
posthumously|ölümünden sonra
preeminently|üstün bir şekilde
preposterously|saçma bir şekilde
presciently|öngörülü biçimde
prevalently|yaygın olarak
primordially|en başından beri
pristinely|tertemiz / bozulmamış halde
prodigally|savurganca
profligately|sefih ve savurganca
prolixly|sözü gereksiz uzatarak
promiscuously|gelişigüzel
prosaically|sıradan / yavan bir şekilde
provincially|dar görüşlülükle
pruriently|şehvetle
puerilely|çocuksu bir tavırla
pusillanimously|korkakça
putatively|varsayımsal olarak
quiescently|sakin ve hareketsizce
quotidianly|gündelik olarak
raffishly|derbeder ama çekici şekilde
rakishly|çapkınca / şık biçimde
rampantly|kontrolsüzce / yaygın olarak
recalcitrantly|dik başlılıkla
reclusively|münzevi bir şekilde
reconditely|anlaşılması güç biçimde
redoubtably|saygı ve korku uyandırarak
refractorily|inatla / direnerek
remedially|iyileştirici olarak
remissly|ihmalkarca
resplendently|göz kamaştırıcı şekilde
restively|huzursuzca / dik başlılıkla
ribaldly|kaba ve müstehcen şekilde
risibly|gülünç bir şekilde
roguishly|haylazca
rudimentarily|temel düzeyde
ruminatively|derin düşünerek
rustically|kırsal / sade biçimde
saccharinely|yapmacık bir tatlılıkla
sacrosanctly|dokunulmaz biçimde
salaciously|müstehcen şekilde
saliently|göze çarpan biçimde
salubriously|sağlıklı bir şekilde
salutarily|faydalı biçimde
sanguinely|iyimserlikle
sapiently|bilgece
saturninely|kasvetli bir tavırla
scintillatingly|parlak ve zekice
scurrilously|kaba ve iftiracı biçimde
sedentarily|hareketsiz olarak
seditiously|kışkırtıcı biçimde
sedulously|çalışkanlıkla
seminally|çığır açıcı şekilde
sententiously|özlü / ahlak dersi vererek
serpentinely|kıvrılarak / sinsice
sinuously|kıvrımlı ve zarif biçimde
slothfully|tembelce
solicitously|ilgi ve endişeyle
somnolently|uykulu bir halde
sonorously|gür bir sesle
soporifically|uyku getirici şekilde
speciously|aldatıcı bir şekilde
splenetically|öfkeyle / huysuzca
squalidly|sefil ve pis halde
staidly|ağırbaşlılıkla
stalwartly|sadakatle / cesurca
stentorianly|gür bir sesle
stolidly|duygusuzca / soğukkanlılıkla
stupendously|muazzam derecede
sublimely|yüce bir şekilde
subserviently|boyun eğerek
supinely|pasif ve uyuşuk biçimde
sybaritically|sefa içinde
tangentially|teğet geçerek
tantamountly|eşdeğer olarak
tawdrily|ucuz ve gösterişli biçimde
tendentiously|taraflı bir şekilde
tenuously|zayıf bir şekilde
tepidly|isteksizce
testily|huysuzca
timorously|çekingenlikle
tractably|uysalca
transcendently|üstün bir şekilde
transiently|geçici olarak
transitorily|kısa süreliğine
tritely|basmakalıp biçimde
turgidly|ağdalı bir dille
ulteriorly|gizli bir niyetle
unassailably|çürütülemez biçimde
uncannily|esrarengiz bir şekilde
unctuously|yağcı bir tavırla
unfetteredly|özgürce
unimpeachably|kusursuz biçimde
unmitigatedly|katıksız şekilde
untenably|savunulamaz şekilde
untowardly|ters bir şekilde
unwieldily|hantalca
uxoriously|karısına aşırı düşkünlükle
vaingloriously|kibirle
vapidly|sıkıcı ve ruhsuz biçimde
verdantly|yemyeşil biçimde
vicariously|dolaylı olarak
vigilantly|tetikte
virulently|şiddetle / düşmanca
vituperatively|ağır hakaretlerle
vivaciously|canlı bir şekilde
volubly|akıcı ve çok konuşarak
wanly|solgun ve bitkin halde
winsomely|çekici ve sevimli biçimde
xenophobically|yabancı düşmanlığıyla

`}
];
