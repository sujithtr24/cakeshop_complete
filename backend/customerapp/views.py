from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Customer_table, cart_tbl
from .serializers import CustomerSerializer
from adminapp.models import cake_tbl


# REGISTER
@api_view(['POST'])
def register(request):

    serializer = CustomerSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Registered successfully"})

    return Response(serializer.errors)


from rest_framework_simplejwt.tokens import RefreshToken
# LOGIN
@api_view(['POST'])
def login(request):

    email = request.data.get('email')
    password = request.data.get('password')

    user = Customer_table.objects.get(
        customer_email=email,
        customer_password=password
    )

    if user:
        refresh = RefreshToken.for_user(user)
        return Response({
            "access" : str(refresh.access_token),
            "refresh" : str(refresh)
        })

    return Response({"error": "Invalid email or password"})


from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import permission_classes
# ADD TO CART
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def add_to_cart(request):

    user_id = request.data.get('user_id')
    cake_id = request.data.get('cake_id')

    try:
        user = Customer_table.objects.get(id=user_id)
        cake = cake_tbl.objects.get(id=cake_id)
    except:
        return Response({"error": "Invalid user or cake"})

    cart, created = cart_tbl.objects.get_or_create(
        customer=user,
        cake=cake
    )

    if not created:
        cart.quantity += 1
        cart.save()

    return Response({"message": "Added to cart"})


# VIEW CART
@api_view(['POST'])
def view_cart(request):

    user_id = request.data.get('user_id')

    try:
        cart_items = cart_tbl.objects.filter(customer_id=user_id)
    except:
        return Response({"error": "User not found"})

    data = []
    total = 0

    for item in cart_items:
        subtotal = item.quantity * item.cake.cake_price
        total += subtotal

        data.append({
            "id": item.id,
            "cake_id": item.cake.id,
            "cake_name": item.cake.cake_name,
            "price": item.cake.cake_price,
            "quantity": item.quantity,
            "subtotal": subtotal,
            "image": item.cake.cake_image.url if item.cake.cake_image else None
        })

    return Response({
        "cart": data,
        "total": total
    })


# INCREASE QUANTITY
@api_view(['POST'])
def increase_quantity(request):

    cart_id = request.data.get('cart_id')

    try:
        cart = cart_tbl.objects.get(id=cart_id)
        cart.quantity += 1
        cart.save()
        return Response({"message": "Quantity increased"})
    except:
        return Response({"error": "Cart item not found"})


# DECREASE QUANTITY
@api_view(['POST'])
def decrease_quantity(request):

    cart_id = request.data.get('cart_id')

    try:
        cart = cart_tbl.objects.get(id=cart_id)

        if cart.quantity > 1:
            cart.quantity -= 1
            cart.save()

        return Response({"message": "Quantity decreased"})
    except:
        return Response({"error": "Cart item not found"})


# REMOVE ITEM FROM CART
@api_view(['DELETE'])
def remove_from_cart(request, id):

    try:
        cart = cart_tbl.objects.get(id=id)
        cart.delete()
        return Response({"message": "Item removed"})
    except:
        return Response({"error": "Cart item not found"})