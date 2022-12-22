// autotest for method https://swapi.dev/api/people/10

pm.test("Статус 200", function () {
    pm.response.to.have.status(200);
});
pm.test("Response time is less than 2000ms", function () {pm.expect(pm.response.responseTime).to.be.below(2000);});
pm.test("Status code name has string", function () {pm.response.to.have.status("OK");});

// autotest for method https://swapi.dev/api/planets/3

pm.test("Planet`s name is Yavin IV", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.name).to.eql("Yavin IV");
});
pm.test("GET, HEAD, OPTIONS", function () {
    pm.response.to.have.header("Allow");
});
pm.test("Response time is less than 1500ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(1500);
});

// autotest for method https://swapi.dev/api/starships/5

pm.test("Статус ОК", function () {
    pm.response.to.have.status("OK");
});
pm.test("В старшипе 75 пассажиров", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.passengers).to.eql("75");
});
pm.test("Название модели Sentinel-class landing craft", function () {
    pm.expect(pm.response.text("Sentinel-class_landing_craft")).to.include("Sentinel-class landing craft");
});