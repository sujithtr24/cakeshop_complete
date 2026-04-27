from rest_framework.decorators import api_view, parser_classes
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser

from .models import cake_tbl
from .serializers import CakeSerializer
from customerapp.models import Customer_table
from customerapp.serializers import CustomerSerializer


# GET ALL CAKES + CREATE CAKE
@api_view(['GET', 'POST'])
@parser_classes([MultiPartParser, FormParser])
def cakes(request):

    # GET → all cakes
    if request.method == 'GET':
        cakes = cake_tbl.objects.all()
        serializer = CakeSerializer(cakes, many=True)
        return Response(serializer.data)

    # POST → create cake
    if request.method == 'POST':
        serializer = CakeSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response({
                "message": "Cake uploaded successfully",
                "data": serializer.data
            })

        return Response(serializer.errors)


# SINGLE CAKE (GET, UPDATE, DELETE)
@api_view(['GET', 'PATCH', 'DELETE'])
@parser_classes([MultiPartParser, FormParser])
def cake_detail(request, id):

    try:
        cake = cake_tbl.objects.get(id=id)
    except cake_tbl.DoesNotExist:
        return Response({"error": "Cake not found"})

    # GET one cake
    if request.method == 'GET':
        serializer = CakeSerializer(cake)
        return Response(serializer.data)

    # UPDATE (partial)
    if request.method == 'PATCH':
        serializer = CakeSerializer(cake, data=request.data, partial=True)

        if serializer.is_valid():
            serializer.save()
            return Response({
                "message": "Cake updated",
                "data": serializer.data
            })

        return Response(serializer.errors)

    # DELETE
    if request.method == 'DELETE':
        cake.delete()
        return Response({"message": "Cake deleted"})


# GET ALL CUSTOMERS (ADMIN VIEW)
@api_view(['GET'])
def customers(request):
    users = Customer_table.objects.all()
    serializer = CustomerSerializer(users, many=True)
    return Response(serializer.data)


# DELETE CUSTOMER
@api_view(['DELETE'])
def delete_customer(request, id):
    try:
        user = Customer_table.objects.get(id=id)
        user.delete()
        return Response({"message": "Customer deleted"})
    except Customer_table.DoesNotExist:
        return Response({"error": "Customer not found"})