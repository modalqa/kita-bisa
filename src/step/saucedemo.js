import { Selector } from 'testcafe';
import Page from '../page-objects/model';
import config from '../config';

const page = new Page();

fixture `Donasi`
    .page `${config.baseUrl}`

test('Donasi Sekarang', async t => {
        await t
        .maximizeWindow()
        .click(page.pilihCampaign)
        .click(page.clickDonasiSekarang)
        .click(page.setNominalDonasi)
        .click(page.setPaymentMethode)
        .typeText(page.inputNama, 'Faris Kurnia Ardi')
        .typeText(page.inpuEmail, 'fariskurniaadi@gmail.com')
        .click(page.clickLanjutkanPembayaran)
        .click(page.kembaliPenggalanganLain)
});


