function quay() : void {
    let min: HTMLInputElement = <HTMLInputElement>document.getElementById("min");
    let min1: number = Number(min.value) ;
    let max: HTMLInputElement = <HTMLInputElement>document.getElementById("max");
    let max1: number = Number(max.value );
    if (min1 > max1) {
        let ketqua: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("result");
        ketqua.innerHTML = "Sai ui, moi ban chon dung!";
    }   else    {
        let a: number = Math.floor(Math.random() * (max1 - min1 + 1) ) + min1;
        let ketqua: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("result");
        ketqua.innerHTML = String(a);
    }
}
export{};