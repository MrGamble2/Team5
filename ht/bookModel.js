function BookToSell(title, id, condition, price, seller) {
    var self = this;
    self.Title = title;
    self.Id = id;
    self.Condition = condition;
    self.Price = price;
    self.Seller = seller;

    self.formattedPrice = ko.computed(function() {
        var bookPrice = self.Price();
        return bookPrice ? "$" + price.toFixed(2) : "None";
    });
}

function ViewModel() {
    var self = this;

    self.DummyBooks = [
        { title: "Book Title 1", id: "CS100", condition: "Good", price: "$50", seller: "Nolan Meeks"},
        { title: "Book Title 2", id: "CS200", condition: "Gooder", price: "$60", seller: "Nolan Meeks2"},
        { title: "Book Title 3", id: "CS200", condition: "Goodest", price: "$70", seller: "Nolan Meeks3"}
    ];

    self.Books = ko.observableArray([
        new BookToSell("Book Title 1", "CS100", "Good", "$50", "Nolan Meeks")
    ]);

    self.TotalBooks = ko.computed(function() {
        var total = self.Books().length;
    })

    self.addBook = function() {
        self.Books.push(new BookToSell("Book Title 2", "CS100", "Good2", "$50", "Nolan Meeks2"));
        self.Books.push(new BookToSell("Book Title 32452", "CS100", "Good2", "$50", "Nolan Meeks2"));
    }
    self.removeBook = function(book) { self.Books.remove(book) }
}

viewModelInstance = new ViewModel();
ko.applyBindings(viewModelInstance, document.getElementById("booksForCourseTable");


