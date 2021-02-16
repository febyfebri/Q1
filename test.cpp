#include<iostream>
#include<stdlib.h>
#include <ctime>



using namespace std;

int main (){

    char pesanan1[30],pesanan2[30],pesanan3[30],yatidak,Y;
    string nama_resto,nama_kasir;
    int harga1,harga2,harga3,hari,bulan,tahun,jam,menit,jml,jml_pesanan,total;
    time_t now = time(0);


cout << "Masukan Nama Resto : ";
getline (cin, nama_resto);
cout << "Nama Kasir : ";
getline (cin, nama_kasir);
pesanan:

tm *ltm = localtime(&now);



cout << "Masukan Jumlah Pesanan (Dalam 1-3) :  ";
cin >> jml_pesanan;


  switch (jml_pesanan) {
  case 1:

    cout << "Masukan Pesanan 1 : ";
    cin >> pesanan1;
    cout <<"Harga : ";
    cin >> harga1;

    total = harga1;

    system("cls");

    cout << "\t\t" << nama_resto <<endl;
    cout << "Tanggal : \t\t"  <<  ltm->tm_mday << "/" << 1 + ltm->tm_mon << "/" << 1900 + ltm->tm_year << "   " << ltm->tm_hour << ":" << ltm->tm_min << ":"<< ltm->tm_sec <<endl;
    cout << "Nama Kasir :\t\t" << nama_kasir <<endl;
    cout << "==========================================" <<endl;
    cout << pesanan1 << "................................" << "Rp." << harga1 <<endl;
    cout << "Total" << ".............................." << "Rp." << total <<endl;
    cout << "Ada Pesanan lain ( Y/N ) ? ";
    cin >> yatidak;

    if (yatidak = 'Y' | 'y' ){
        goto pesanan;
    }else{
        cout << "Terima Kasih";
    }

    break;

  case 2:
    cout << "Masukan Pesanan 1 : ";
    cin >> pesanan1;

    cout <<"Harga : ";
    cin >> harga1;

    cout << "Masukan Pesanan 2 : ";
    cin >> pesanan2;

    cout <<"Harga : ";
    cin >> harga2;

    total = harga1 + harga2;

        system("cls");

    cout << "\t\t" << nama_resto <<endl;
    cout << "Tanggal : \t\t"  <<  ltm->tm_mday << "/" << 1 + ltm->tm_mon << "/" << 1900 + ltm->tm_year << "   " << ltm->tm_hour << ":" << ltm->tm_min << ":"<< ltm->tm_sec <<endl;
    cout << "Nama Kasir :\t\t" << nama_kasir <<endl;
    cout << "==========================================" <<endl;
    cout << pesanan1 << "................................" << "Rp." << harga1 <<endl;
    cout << pesanan2 << "................................" << "Rp." << harga2 <<endl;
    cout << "Total" << "..............................." << "Rp." << total <<endl;
    cout << "Ada Pesanan lain ( Y/N ) ?";
    cin >> yatidak;

    if (yatidak = 'Y' | 'y' ){
        goto pesanan;
    }else{
        cout << "Terima Kasih";
    }

    break;

  case 3:

    cout << "Masukan Pesanan 1 : ";
    cin >> pesanan1;

    cout <<"Harga : ";
    cin >> harga1;

    cout << "Masukan Pesanan 2 : ";
    cin >> pesanan2;

    cout <<"Harga : ";
    cin >> harga2;

    cout << "Masukan Pesanan 3 : ";
    cin >> pesanan3;
    cout <<"Harga : ";
    cin >> harga3;

    total = harga1 + harga2 + harga3;

    system("cls");

    cout << "\t\t" << nama_resto <<endl;
    cout << "Tanggal : \t\t"  <<  ltm->tm_mday << "/" << 1 + ltm->tm_mon << "/" << 1900 + ltm->tm_year << "   " << ltm->tm_hour << ":" << ltm->tm_min << ":"<< ltm->tm_sec <<endl;
    cout << "Nama Kasir :\t\t" << nama_kasir <<endl;
    cout << "==========================================" <<endl;
    cout << pesanan1 << "................................" << "Rp." << harga1 <<endl;
    cout << pesanan2 << "................................" << "Rp." << harga2 <<endl;
    cout << pesanan3 << "................................" << "Rp." << harga3 <<endl;
    cout << "Total" << "..............................." << "Rp." << total <<endl;
    cout << "Ada Pesanan lain ( Y/N ) ?";
    cin >> yatidak;
    if (yatidak = 'Y' | 'y' ){
        goto pesanan;
    }else{
        cout << "Terima Kasih";
    }

    break;
    default :
         cout << "Masukan Yang Benar" << endl;
         goto pesanan;
  }


return 0;

}
