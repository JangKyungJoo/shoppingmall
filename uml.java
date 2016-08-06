public class ListPage{
	private Item itemList[];
	private Category category;
	private int totalNum;

	public void searchItem(){
		// get item list from database
		// result = select * from item;
		itemList = result;
		setItemList(itemList);
	}

	public void setItemList(Item itemList[]){
		this.itemList = itemList;
		// show item list
		return;
	}

	public void showDetailPage(int id){
		// get detail info from database
		DetailPage.getItemDetail(id);
	}
}

public class DetailPage{
	private Item item;
	private Review review;
	private QnA qna;
	private String postDate;

	public void getReply(int id){
		// get review & QnA from database;
		// result1 = select * from review where id = id;
		// result2 = select * from qna where id = id;
		review = result1;
		qna = result2;
		saveHistory();
	}

	public void saveHistory(){
		// save page info which customer clicked into cookie or session
		// max num is 5
		// show item detail && review && QnA
		return;
	}

	public void getItemDetail(int id){
		// get item detail from database
		// result = select * from item where id = id;
		item = result;
		getReply(id);
	}
}

public class Item{
	private int itemID;
	private String itemName;
	private int itemPrice;
	private int itemNum;
	private String itemImage;
	private String itemContent;
	private String itemSize;
	private boolean isSoldOUT;
	private int itemPoint;
}

public class Reply{
	private int itemID;
	private int replyID;
	private int writerID;
	private String Date;
	private int replyType;
}

public class Review extends Reply{
	private String content;
	private float rate;
}

public class QnA extends Reply{
	private String title;
	private boolean isSecret;
}