import { Selector } from 'testcafe';

export default class Page {
    constructor () {
        //Happy Scenario or Normal Case
        this.pilihCampaign = Selector('span').withText('Solidaritas bantu banjir Kalimantan !!')
        this.clickDonasiSekarang = Selector('button#campaign-detail_button_donasi-sekarang')
        this.setNominalDonasi =  Selector('p.infoText').withText('Nominal minimal donasi')
        this.setPaymentMethode = Selector('span').withText('BCA Virtual Account');
        this.inputNama = Selector('input[name="fullname"]')
        this.inpuEmail = Selector('input[name="username"]')
        this.clickLanjutkanPembayaran = Selector('[data-testid="button-lanjut-pembayaran"]')
        this.kembaliPenggalanganLain = Selector('span').withText('Donasi ke penggalangan lain')


    }

}